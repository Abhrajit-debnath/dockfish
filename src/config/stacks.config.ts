

interface TechStack {
  value: string,
  label: string,
  hint: string

}


export const stacks: TechStack[] = [
  { value: "next", label: "Next.js", hint: "App Router / Pages Router" },
  { value: "node", label: "Node.js", hint: "Express, Fastify, NestJS" },
  //   { value: "python", label: "Python", hint: "FastAPI, Django, Flask" },
  //   { value: "java", label: "Java 17 + Maven", hint: "Spring Boot" },
];
