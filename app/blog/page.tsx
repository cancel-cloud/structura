import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Sparkles,
  Tag,
} from "lucide-react"

import { CtaFooterSection } from "@/components/cta-footer-section"
import { IconBadge } from "@/components/icon-badge"
import { ReviewSection } from "@/components/review-section"
import {
  LoadRevealGroup,
  RevealGroup,
  RevealItem,
} from "@/components/scroll-reveal"
import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { blogPosts, type BlogPost } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read ideas on modern architecture, natural light, space planning, minimal design, and refined living.",
}

const featuredPost = blogPosts[0]
const articlePosts = blogPosts.slice(1)

function BlogPage() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="blog" appearance="default" />

      <section className="px-4 pt-28 pb-14 sm:px-6 lg:px-8 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={BookOpen}>Blog</IconBadge>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                Insights for Better Modern Living
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Explore ideas on architecture, interiors, natural light, space
                planning, and the details that shape refined homes.
              </p>
            </RevealItem>
          </LoadRevealGroup>

          <RevealGroup className="mt-14">
            <RevealItem>
              <FeaturedArticle post={featuredPost} />
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {articlePosts.map((post, index) => (
              <RevealItem key={post.slug}>
                <ArticleCard post={post} priority={index < 2} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ReviewSection />
      <CtaFooterSection />
    </main>
  )
}

function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <Card className="grid gap-0 p-0 lg:grid-cols-[1.15fr_0.85fr]">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="relative min-h-[24rem] bg-muted lg:min-h-[34rem]"
      >
        <Image
          src={post.image}
          alt={`${post.title} article preview`}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      </Link>
      <CardContent className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <IconBadge icon={Sparkles}>Featured Blog</IconBadge>
          <div className="mt-5">
            <ArticleMeta post={post} />
          </div>
          <h2 className="mt-6 text-3xl font-medium tracking-normal sm:text-5xl sm:text-balance">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            {post.excerpt}
          </p>
        </div>
        <Button asChild className="mt-8 w-fit">
          <Link href={`/blog/${post.slug}`}>
            Read Article
            <ArrowUpRight data-icon="inline-end" className="size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function ArticleCard({
  post,
  priority = false,
}: {
  post: BlogPost
  priority?: boolean
}) {
  return (
    <Card id={post.slug} className="h-full p-0">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="relative block aspect-[16/10] bg-muted"
      >
        <Image
          src={post.image}
          alt={`${post.title} article preview`}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
      </Link>
      <CardHeader>
        <ArticleMeta post={post} />
        <CardTitle className="mt-4 text-2xl tracking-normal">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="mt-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline">
          <Link href={`/blog/${post.slug}`}>
            Read More
            <ArrowUpRight data-icon="inline-end" className="size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ArticleMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
      <IconBadge icon={Tag}>{post.category}</IconBadge>
      <span className="flex items-center gap-2">
        <CalendarDays className="size-3.5" aria-hidden="true" />
        {post.date}
      </span>
    </div>
  )
}

export default BlogPage
