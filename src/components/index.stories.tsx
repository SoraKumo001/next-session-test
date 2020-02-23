import * as React from "react";
import { storiesOf } from "@storybook/react";
import { apolloDecorator } from "../storybook/ApolloDecorator";
import { Head } from "./Head";
import { LinkBox } from "./LinkBox";

storiesOf("Components", module)
  .addDecorator(apolloDecorator)
  .add("Head", () => {
    return <Head />;
  })
  .add("page02", () => {
    return <LinkBox href="">リンク</LinkBox>;
  });
