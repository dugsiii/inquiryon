"use client";
import FadeInOnScroll from "@/components/fadeInOnScroll";
import Section from "@/components/section";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <Section className="bg-primary">
      <div className="flex flex-col py-16 gap-12 items-center text-primary-foreground">
        <FadeInOnScroll>
          <div className="flex flex-col items-center gap-4">
            <h2>About</h2>
            <p className="max-w-lg">
              We exist to help <b>everyday people</b> connect with technology in
              order to unlock it’s potential. In doing so, we bridge gaps in
              understanding and build a more inclusive, innovative tomorrow.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="h-0.5 w-24 bg-secondary"></div>
        </FadeInOnScroll>
        <FadeInOnScroll>
          <div className="flex flex-col items-center gap-8 lg:gap-1">
            <h3>Our Team</h3>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/founder.png"
                  alt="Jeshua Profile Picture"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h6 className="text-2xl">Jeshua Cheng</h6>
                  <p>Founder</p>
                </div>
              </div>
              <p className="max-w-xs sm:max-w-lg">
                Hi I’m Jeshua! I’ve always been passionate about AI, not just as
                a technology, but as a tool to <b>empower people</b>. I founded
                Inquiryon to make AI more intuitive, in order to simplify lives
                and make a meaningful impact.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </Section>
  );
}
