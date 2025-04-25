import type { Chat, ChatMessage, Project } from "../types";

const MOCKED_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "Hello, can you help me with my Nuxt.js project?",
  },
  {
    id: "2",
    role: "assistant",
    content:
      "Of course! I'd be happy to help with your Nuxt.js project. What specific questions or issues do you have?",
  },
  {
    id: "3",
    role: "user",
    content: "How do I implement server-side rendering?",
  },
  {
    id: "4",
    role: "assistant",
    content:
      "Nuxt.js provides server-side rendering out of the box! You don't need to do any special configuration for basic SSR. If you need specific optimizations, we can discuss those in detail.",
  },
  {
    id: "5",
    role: "user",
    content: "Can you tell me more about tests in Nuxt?",
  },
  {
    id: "6",
    role: "assistant",
    content: `
# Mount Components

---

When writing unit tests, you have access to a bunch of helper methods.

One super useful one is \`mountSuspended\`. It lets you mount any component inside your Nuxt context with async setup:

\`\`\`ts
import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';

import MyComponent from './MyComponent.vue';

describe('MyComponent', () => {
  it('renders the message correctly', async () => {
    const wrapper = await mountSuspended(MyComponent);
    expect(wrapper.text()).toContain('This component is set up.');
  });
});
\`\`\`

You’re also able to mount your app at a specific route, by passing in the App component and a route:

\`\`\`ts
import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';

import App from './App.vue';

describe('About', () => {
  it('renders the about page', async () => {
    const wrapper = await mountSuspended(App, { route: '/about' });
    expect(wrapper.text()).toContain('Hi, my name is Michael!');
  });
});
\`\`\`

# Mocking API Routes

---

If you've ever written unit tests, you'll have needed to mock out API endpoints that are used in your components or stores.

With \`@nuxt/test-utils\` this is really simple, because you get the \`registerEndpoint\` utility method:

\`\`\`ts
import { registerEndpoint } from '@nuxt/test-utils/runtime';
import userTestData from './userTestData.json';

registerEndpoint('/users/', () => userTestData);

// ...tests
\`\`\`

You can mock any server route (API endpoint), including external endpoints if you need.

# Mocking Imports

---

One handy helper method in \`@nuxt/test-utils\` is \`mockNuxtImport\`.

It's a convenience method to make it easier to mock anything that Nuxt would normally auto-import:

\`\`\`js
import { mockNuxtImport } from '@nuxt/test-utils/runtime';
mockNuxtImport('useAsyncData', () => {
  return () => {
    return { data: 'Mocked data' };
  };
});
// ...tests
\`\`\`
`,
  },
];

const MOCKED_CHAT: Chat = {
  id: "1",
  title: "Nuxt.js project help",
  messages: [...MOCKED_MESSAGES],
  projectId: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const MOCKED_PROJECT: Project = {
  id: "1",
  name: "Nuxt.js project",
};

export { MOCKED_CHAT, MOCKED_MESSAGES, MOCKED_PROJECT };
