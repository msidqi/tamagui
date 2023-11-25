import { useUser } from 'hooks/useUser'
import { useRouter } from 'next/router'
import * as React from 'react'
import { Paragraph, TooltipSimple, YStack, styled } from 'tamagui'

import { GithubIcon } from './GithubIcon'
import { HeaderProps } from './HeaderProps'
import { NextLink } from './NextLink'

const HeadAnchor = styled(Paragraph, {
  fontFamily: '$silkscreen',
  px: '$3',
  py: '$2',
  cursor: 'pointer',
  size: '$3',
  color: '$color10',
  hoverStyle: { opacity: 1, color: '$color' },
  pressStyle: { opacity: 0.25 },
  tabIndex: -1,
  w: '100%',
  tag: 'a',
})

export const HeaderLinks = ({ showExtra, forceShowAllLinks, showAuth }: HeaderProps) => {
  const userSwr = useUser()
  const router = useRouter()
  // there is user context and supabase setup in the current page
  return (
    <>
      <NextLink passHref prefetch={false} href="/docs/intro/installation">
        <HeadAnchor
          $sm={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Docs
        </HeadAnchor>
      </NextLink>

      {/* <NextLink passHref prefetch={false} href="/themes">
        <HeadAnchor
          $sm={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Themes
        </HeadAnchor>
      </NextLink> */}

      <NextLink passHref prefetch={false} href="/studio">
        <HeadAnchor
          $md={{
            display: forceShowAllLinks ? 'flex' : 'none',
          }}
        >
          Studio
        </HeadAnchor>
      </NextLink>

      {!router.asPath.startsWith('/takeout') && (
        <NextLink passHref legacyBehavior={false} prefetch={false} href="/takeout">
          <TooltipSimple
            disabled={forceShowAllLinks}
            delay={0}
            restMs={25}
            label="Takeout"
          >
            <HeadAnchor
              tag="span"
              {...(!forceShowAllLinks && {
                size: '$8',
                mr: '$-3',
              })}
              $sm={{
                display: forceShowAllLinks ? 'flex' : 'none',
              }}
            >
              {forceShowAllLinks ? ' Takeout 🥡' : '🥡'}
            </HeadAnchor>
          </TooltipSimple>
        </NextLink>
      )}

      {forceShowAllLinks && (
        <NextLink
          prefetch={false}
          legacyBehavior={false}
          target="_blank"
          href="https://github.com/tamagui/tamagui"
        >
          <HeadAnchor>
            Github{' '}
            <YStack dsp="inline-block" y={10} my={-20} o={0.8}>
              <GithubIcon width={16} />
            </YStack>
          </HeadAnchor>
        </NextLink>
      )}

      {forceShowAllLinks && (
        <NextLink prefetch={false} href="/community">
          <HeadAnchor>Community</HeadAnchor>
        </NextLink>
      )}

      {showExtra && (
        <NextLink prefetch={false} href="/studio">
          <HeadAnchor>Studio</HeadAnchor>
        </NextLink>
      )}

      {showExtra && !userSwr.data?.session?.user && (forceShowAllLinks || showAuth) && (
        <NextLink prefetch={false} href="/login">
          <HeadAnchor
            $md={{
              display: forceShowAllLinks ? 'flex' : 'none',
            }}
          >
            Login
          </HeadAnchor>
        </NextLink>
      )}
    </>
  )
}
