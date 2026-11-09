import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Tag,
} from "lucide-react"

import { CtaFooterSection } from "@/components/cta-footer-section"
import { IconBadge } from "@/components/icon-badge"
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
import { blogPosts, getBlogPostBySlug, type BlogPost } from "@/lib/blog-posts"

type BlogDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((relatedPost) => relatedPost.slug !== post.slug)
    .slice(0, 2)

  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="blog" appearance="default" />

      <article className="px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="max-w-4xl">
            <RevealItem>
              <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
                <Link href="/blog">
                  <ArrowLeft data-icon="inline-start" className="size-4" />
                  Back to Blog
                </Link>
              </Button>
            </RevealItem>
            <RevealItem>
              <ArticleMeta post={post} />
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                {post.title}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {post.excerpt}
              </p>
            </RevealItem>
          </LoadRevealGroup>

          <RevealGroup className="mt-10">
            <RevealItem>
              <Card className="p-0">
                <div className="relative aspect-[16/9] min-h-[18rem] bg-muted">
                  <Image
                    src={post.image}
                    alt={`${post.title} hero image`}
                    fill
                    priority
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Card>
            </RevealItem>
          </RevealGroup>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
            <RevealGroup className="space-y-10">
              {post.sections.map((section) => (
                <RevealItem key={section.heading}>
                  <section>
                    <h2 className="text-2xl font-medium tracking-normal sm:text-3xl">
                      {section.heading}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {section.body}
                    </p>
                  </section>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealGroup className="space-y-4 lg:sticky lg:top-28">
              <RevealItem>
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Article Details</CardTitle>
                    <CardDescription>
                      A quick summary for this Structura journal entry.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between gap-4">
                      <span>Category</span>
                      <IconBadge icon={Tag}>{post.category}</IconBadge>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>Published</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </RevealItem>

              <RevealItem>
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>Start a Project</CardTitle>
                    <CardDescription>
                      Bring the same level of clarity to your next residence.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild size="sm">
                      <Link href="mailto:hello@structura.studio">
                        Contact Us
                        <ArrowUpRight
                          data-icon="inline-end"
                          className="size-4"
                        />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </article>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <RevealItem>
              <IconBadge icon={BookOpen}>More Stories</IconBadge>
              <h2 className="mt-5 text-3xl font-medium tracking-normal sm:text-5xl">
                Related Reads
              </h2>
            </RevealItem>
            <RevealItem>
              <Button asChild variant="outline">
                <Link href="/blog">
                  View All
                  <ArrowUpRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <RevealItem key={relatedPost.slug}>
                <RelatedArticleCard post={relatedPost} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaFooterSection />
    </main>
  )
}

function RelatedArticleCard({ post }: { post: BlogPost }) {
  return (
    <Card className="h-full p-0">
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="relative block aspect-[16/10] bg-muted"
      >
        <Image
          src={post.image}
          alt={`${post.title} article preview`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
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

export default BlogDetailPage
