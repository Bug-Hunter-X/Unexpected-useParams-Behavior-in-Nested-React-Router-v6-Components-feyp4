# Unexpected useParams Behavior in Nested React Router v6 Components

This repository demonstrates a common issue encountered when using the `useParams` hook in nested components within React Router v6.  The problem arises when `useParams` is used in a component that's not directly rendered by a `<Route>` component.  In this scenario, `useParams` might return `undefined` or stale data, leading to incorrect application behavior.

## Problem

The `useParams` hook relies on the routing context provided by the nearest `<Route>` component.  If a component using `useParams` is nested several levels deep and not directly a child of a route, it may not inherit the correct context. This results in `useParams` returning an empty object, or data that doesn't reflect the current URL parameters.

## Solution

The solution involves ensuring that the component using `useParams` is either:

1.  A direct child of a `<Route>` component.
2.  Passed the necessary route parameters explicitly as props.

This example repo provides the incorrect implementation and a corrected version illustrating the proper usage of `useParams` within nested routes.