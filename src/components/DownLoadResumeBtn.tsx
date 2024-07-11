"use client"
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './HackerBtn'

function DownLoadResumeBtn() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Path to the PDF file in the public folder
    link.download = 'Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
    {/* <Link href="/" className={cn(buttonVariants({ variant: "default", size:"lg"}))}>
      <Download className="mx-1" />
      Download Resume
    </Link> */}
    <div onClick={handleDownload}>
    <HackerBtn label='Download Resume' />
    </div>
  </div>
  )
}

export default DownLoadResumeBtn