"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    User,
    Mail,
    MapPin,
    Link as LinkIcon,
    Calendar,
    Star,
    GitFork,
    Activity,
    Briefcase,
    BookOpen,
    Edit,
    Globe,
    Github,
    Linkedin,
    Twitter,
    ExternalLink,
} from "lucide-react";
import { links, bio, work, education, skills, projects } from '@/config/data';
import Image from "next/image";
import { useState } from "react";

// Updated user data with actual information
const userData = {
    name: bio.full_name,
    role: work[0].role,
    email: links.email.replace('mailto:', ''),
    location: "Gorakhpur, India",
    website: links.domain,
    joinDate: "August 2023",
    bio: bio.line2,
    stats: {
        projects: 15, // You can adjust these numbers
        followers: 200,
        following: 150,
        contributions: 450
    },
    workExperience: work.map(job => ({
        company: job.company_name,
        role: job.role,
        duration: job.duration,
        location: "India", // Add actual locations if available
        description: job.points[0], // Using first point as summary
        companyLink: job.companyLink,
        allPoints: job.points
    })),
    education: [{
        institution: education[0].university,
        degree: education[0].degree,
        duration: education[0].duration,
        score: education[0].grade
    }]
};

const activities = [

    {
        type: "Project",
        title: "IndieRP",
        description: "Launched comprehensive full-stack ERP system",
        date: "Recent",
        icon: Activity
    },
    {
        type: "Work",
        title: "Web Accuracy",
        description: "Completed successful tenure as Software Developer Engineer",
        date: "Aug 2023 - Aug 2024",
        icon: Star
    }
];

// Add this component for image loading
const ImageWithFallback = ({ src, alt, className, ...props }) => {
    const [error, setError] = useState(false);

    return (
        <div className={`bg-gray-100 ${className}`}>
            <img
                src={error ? `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&background=random` : src}
                alt={alt}
                className={className}
                onError={() => setError(true)}
                {...props}
            />
        </div>
    );
};

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-50/30 p-3 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
                    <div className="relative group">
                        <Image
                            src="/me.jpg"
                            alt={userData.name}
                            width={120}
                            height={120}
                            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover"
                        />
                        <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 sm:p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            <Edit className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                        </button>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                            <div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{userData.name}</h1>
                                <p className="text-sm sm:text-base text-gray-600">{bio.line1}</p>
                            </div>
                            <div className="flex gap-2 justify-center sm:justify-start">
                                <Button size="sm" variant="outline" asChild>
                                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-sm">
                                        <Github className="w-4 h-4 mr-2" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button size="sm" variant="outline" asChild>
                                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm">
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl">{userData.bio}</p>

                        <div className="mt-3 sm:mt-4 flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                            <a href={`mailto:${userData.email}`} className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="text-xs sm:text-sm">{userData.email}</span>
                            </a>
                            <a href={links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="text-xs sm:text-sm">Twitter</span>
                            </a>
                            <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span className="text-xs sm:text-sm">{userData.website}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                    {[
                        { label: "Projects", value: userData.stats.projects },
                        { label: "Followers", value: userData.stats.followers },
                        { label: "Following", value: userData.stats.following },
                        { label: "Contributions", value: userData.stats.contributions }
                    ].map((stat, index) => (
                        <Card key={index}>
                            <CardContent className="p-3 sm:p-4 flex flex-col items-center">
                                <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                                <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="mt-6 sm:mt-8">
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Skills & Technologies</h2>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {skills.map((skill, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                            <div className="aspect-video relative overflow-hidden bg-gray-100">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex justify-between items-start mb-3 sm:mb-4">
                                    <div>
                                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{project.title}</h3>
                                        <p className="text-xs sm:text-sm text-gray-600">{project.description}</p>
                                    </div>
                                    <div className="flex gap-1 sm:gap-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="outline"
                                            className="text-[10px] sm:text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Work Experience Section */}
                <div className="mt-6 sm:mt-8">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Work Experience</h2>
                    <div className="space-y-4 sm:space-y-8">
                        {work.map((job, index) => (
                            <Card key={index} className="hover:shadow-lg transition-all">
                                <CardContent className="p-4 sm:p-6">
                                    <div className="flex gap-3 sm:gap-4">
                                        <ImageWithFallback
                                            src={job.company_logo_link}
                                            alt={job.company_name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                                                <div>
                                                    <h3 className="font-semibold text-base sm:text-lg">{job.company_name}</h3>
                                                    <p className="text-sm text-gray-600">{job.role}</p>
                                                </div>
                                                <span className="text-xs sm:text-sm text-gray-500">{job.duration}</span>
                                            </div>
                                            <ul className="mt-3 sm:mt-4 space-y-2">
                                                {job.points.map((point, pointIndex) => (
                                                    <li key={pointIndex} className="text-xs sm:text-sm text-gray-600 flex gap-2">
                                                        <span className="text-blue-500">•</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="w-full justify-start">
                        <TabsTrigger value="overview">Overview</TabsTrigger>

                        <TabsTrigger value="activity">Activity</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-blue-500" />
                                        Work Experience
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {userData.workExperience.map((work, index) => (
                                        <div key={index} className="border-l-2 border-blue-500 pl-4 pb-4">
                                            <h3 className="font-semibold text-base">{work.company}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge variant="secondary">{work.role}</Badge>
                                                <span className="text-sm text-gray-500">{work.duration}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">{work.description}</p>
                                            <div className="flex items-center gap-1 mt-2">
                                                <MapPin className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-500">{work.location}</span>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-emerald-500" />
                                        Education
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {userData.education.map((edu, index) => (
                                        <div key={index} className="border-l-2 border-emerald-500 pl-4 pb-4">
                                            <h3 className="font-semibold text-base">{edu.institution}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                                                    {edu.degree}
                                                </Badge>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-sm text-gray-500">{edu.duration}</span>
                                                <Badge variant="outline" className="text-emerald-600">
                                                    {edu.score}
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="activity" className="mt-6">
                        <Card>
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    {activities.map((activity, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="mt-1">
                                                <activity.icon className="w-5 h-5 text-blue-500" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">{activity.type}</Badge>
                                                    <span className="text-sm text-gray-500">{activity.date}</span>
                                                </div>
                                                <h3 className="font-medium mt-1">{activity.title}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>


                </Tabs>
            </div>
        </div>
    );
}
