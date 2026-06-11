import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutSection, profile } from "@/lib/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        <SectionHeading
          overline={aboutSection.overline}
          title={aboutSection.title}
        />

        <AnimatedText
          text={profile.bio}
          className="max-w-3xl text-lg leading-relaxed text-ink-muted"
        />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={profile.resumeUrl} variant="secondary">
            {aboutSection.resumeLabel}
          </Button>
          <span className="text-sm text-ink-subtle">{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
