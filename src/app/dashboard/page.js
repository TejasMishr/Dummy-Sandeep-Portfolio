"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Bell, X, CheckCircle2, AlertTriangle, Info, Plus, BarChart2, Users, Settings, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, DollarSign, Briefcase } from "lucide-react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";
import { VisitorsChart } from "@/components/charts/VisitorsChart";



// Dummy data for the chart
const analyticsData = [
    { name: "Jan", value: 400, revenue: 2400 },
    { name: "Feb", value: 300, revenue: 1398 },
    { name: "Mar", value: 600, revenue: 3800 },
    { name: "Apr", value: 800, revenue: 4300 },
    { name: "May", value: 500, revenue: 2400 },
    { name: "Jun", value: 750, revenue: 3908 },
];

// Update notices data with more fields
const notices = [
    {
        id: 1,
        title: "System Maintenance",
        description: "Scheduled maintenance on Saturday, 10 PM EST. Please save your work and expect brief service interruptions.",
        type: "warning",
        date: "2025-03-15",
        isRead: false,
        priority: "high"
    },
    {
        id: 2,
        title: "New Feature Released",
        description: "Check out our new analytics dashboard features. Enhanced reporting and real-time data visualization now available.",
        type: "info",
        date: "2025-03-14",
        isRead: false,
        priority: "medium"
    },
    {
        id: 3,
        title: "Security Update",
        description: "Important security patches have been applied to enhance system protection.",
        type: "success",
        date: "2025-03-13",
        isRead: true,
        priority: "low"
    }
];

const quickActions = [
    {
        title: "Create New Post",
        description: "Write a new blog post or article",
        icon: Plus,
        action: () => console.log("Create post"),
        color: "blue"
    },
    {
        title: "View Analytics",
        description: "Check detailed statistics",
        icon: BarChart2,
        action: () => console.log("View analytics"),
        color: "emerald"
    },
    {
        title: "Manage Users",
        description: "Add or remove team members",
        icon: Users,
        action: () => console.log("Manage users"),
        color: "purple"
    },
    {
        title: "System Settings",
        description: "Configure system preferences",
        icon: Settings,
        action: () => console.log("Settings"),
        color: "amber"
    },
];

export default function Dashboard() {
    const [showNotices, setShowNotices] = useState(false);
    const unreadNotices = notices.filter(notice => !notice.isRead).length;

    return (
        <div className="min-h-screen bg-gray-50/30 p-3 sm:p-4 md:p-8">
            <div className="mb-4 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-sm sm:text-base text-muted-foreground">Welcome back to your dashboard overview.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8">
                <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="space-y-1 pb-2 p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        Total Users
                                    </CardTitle>
                                    <div className="p-2 bg-blue-50 rounded-full">
                                        <Users className="h-4 w-4 text-blue-500" />
                                    </div>
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <div className="text-2xl font-bold">1,234</div>
                                    <Badge variant="secondary" className="flex gap-1 items-center">
                                        <ArrowUp className="h-3 w-3 text-emerald-500" />
                                        <span className="text-xs font-medium text-emerald-500">12%</span>
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <div className="h-[60px] -mx-2">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={analyticsData}>
                                            <defs>
                                                <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#818cf8"
                                                fill="url(#userGradient)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="space-y-1 pb-2 p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        Revenue
                                    </CardTitle>
                                    <div className="p-2 bg-emerald-50 rounded-full">
                                        <DollarSign className="h-4 w-4 text-emerald-500" />
                                    </div>
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <div className="text-2xl font-bold">$12,345</div>
                                    <Badge variant="secondary" className="flex gap-1 items-center">
                                        <ArrowUp className="h-3 w-3 text-emerald-500" />
                                        <span className="text-xs font-medium text-emerald-500">8%</span>
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <div className="h-[60px] -mx-2">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={analyticsData}>
                                            <defs>
                                                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <Area
                                                type="monotone"
                                                dataKey="revenue"
                                                stroke="#10b981"
                                                fill="url(#revenueGradient)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader className="space-y-1 pb-2 p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium text-muted-foreground">
                                        Active Projects
                                    </CardTitle>
                                    <div className="p-2 bg-purple-50 rounded-full">
                                        <Briefcase className="h-4 w-4 text-purple-500" />
                                    </div>
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <div className="text-2xl font-bold">45</div>
                                    <Badge variant="secondary" className="flex gap-1 items-center">
                                        <ArrowUp className="h-3 w-3 text-emerald-500" />
                                        <span className="text-xs font-medium text-emerald-500">3 new</span>
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6">
                                <div className="h-[60px] -mx-2">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={analyticsData}>
                                            <defs>
                                                <linearGradient id="projectGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2} />
                                                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <Area
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#a855f7"
                                                fill="url(#projectGradient)"
                                                strokeWidth={2}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </div>


                    <VisitorsChart />
                </div>

                <div className="w-full lg:w-80 space-y-3 sm:space-y-4 lg:space-y-6">
                    <Card className="lg:sticky lg:top-8 hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
                            <div>
                                <CardTitle>Notices</CardTitle>
                                <CardDescription>Recent updates & alerts</CardDescription>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="relative"
                                onClick={() => setShowNotices(!showNotices)}
                            >
                                <Bell className="h-5 w-5" />
                                {unreadNotices > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {unreadNotices}
                                    </span>
                                )}
                            </Button>
                        </CardHeader>
                    </Card>

                    <Card className="lg:sticky lg:top-8 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
                            <CardDescription className="text-sm">Common tasks and operations</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                                {quickActions.map((action, index) => {
                                    const Icon = action.icon;
                                    return (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="w-full justify-start h-auto py-2.5 sm:py-3 px-3 sm:px-4 group hover:shadow-md transition-all duration-300"
                                            onClick={action.action}
                                        >
                                            <div className="flex items-center gap-2 sm:gap-3 w-full">
                                                <div className={`p-1.5 sm:p-2 rounded-lg bg-${action.color}-50 text-${action.color}-500 group-hover:bg-${action.color}-100 transition-colors duration-300`}>
                                                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                </div>
                                                <div className="flex flex-col items-start gap-0.5">
                                                    <span className="font-semibold text-xs sm:text-sm">
                                                        {action.title}
                                                    </span>
                                                    <span className="text-[10px] sm:text-xs text-muted-foreground">
                                                        {action.description}
                                                    </span>
                                                </div>
                                                <ChevronRight className="ml-auto h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                                            </div>
                                        </Button>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {showNotices && (
                <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
                    <div className="bg-white rounded-t-xl sm:rounded-xl w-full sm:max-w-md max-h-[85vh] sm:max-h-[90vh] flex flex-col shadow-2xl">
                        <div className="p-4 sm:p-6 border-b">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">Notifications</h2>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        You have {unreadNotices} unread notifications
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setShowNotices(false)}
                                    className="hover:bg-gray-100 rounded-full"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
                            <div className="space-y-2 sm:space-y-3">
                                {notices.map((notice) => (
                                    <div
                                        key={notice.id}
                                        className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${notice.isRead ? 'bg-gray-50/50' : 'bg-white'
                                            } ${notice.priority === 'high' ? 'border-red-100' :
                                                notice.priority === 'medium' ? 'border-blue-100' :
                                                    'border-gray-100'
                                            }`}
                                    >
                                        <div className="flex gap-3">
                                            <div className={`mt-1 ${notice.type === 'warning' ? 'text-amber-500' :
                                                notice.type === 'info' ? 'text-blue-500' :
                                                    'text-emerald-500'
                                                }`}>
                                                {notice.type === 'warning' && <AlertTriangle className="h-5 w-5" />}
                                                {notice.type === 'info' && <Info className="h-5 w-5" />}
                                                {notice.type === 'success' && <CheckCircle2 className="h-5 w-5" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between">
                                                    <h3 className="font-semibold text-sm">
                                                        {notice.title}
                                                    </h3>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${notice.priority === 'high' ? 'bg-red-100 text-red-700' :
                                                        notice.priority === 'medium' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-gray-100 text-gray-700'
                                                        }`}>
                                                        {notice.priority}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    {notice.description}
                                                </p>
                                                <div className="flex items-center justify-between mt-3">
                                                    <p className="text-xs text-muted-foreground">
                                                        {new Date(notice.date).toLocaleDateString(undefined, {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric'
                                                        })}
                                                    </p>
                                                    {!notice.isRead && (
                                                        <span className="text-xs text-blue-600 font-medium">
                                                            New
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-3 sm:p-4 border-t bg-gray-50/50">
                            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full sm:w-auto text-muted-foreground text-xs sm:text-sm"
                                >
                                    Mark all as read
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto text-xs sm:text-sm"
                                    onClick={() => setShowNotices(false)}
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
