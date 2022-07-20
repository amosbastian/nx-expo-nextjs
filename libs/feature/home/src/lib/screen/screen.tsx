import { ChevronDown, ChevronUp } from '@tamagui/feather-icons';
import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  SharedUi,
  XStack,
  YStack,
  Sheet,
} from '@nx-expo-nextjs/ui';
import { useLink } from 'solito/link';
import * as React from 'react';

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  const linkProps = useLink({
    href: '/user/amos',
    as: '/user/amos',
    shallow: false,
  });

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$4"
      space
    >
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <Paragraph textAlign="center">
          Here's a basic starter to show navigating from one screen to another.
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <SharedUi />
        <Separator />
        <Paragraph textAlign="center">
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{' '}
          <Anchor
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>
      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
      <SheetDemo />
    </YStack>
  );
}

function SheetDemo() {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState(0);

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onChangeOpen={setOpen}
        snapPoints={[80]}
        position={position}
        onChangePosition={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame alignItems="center" justifyContent="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false);
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
