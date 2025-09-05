"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  image: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  subtitle,
  category,
  timeline,
  image
}) => {
  return (
    <div className="relative">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-sm">
            {timeline}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-1">
          {title}
        </h3>
        <p className="text-blue-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;