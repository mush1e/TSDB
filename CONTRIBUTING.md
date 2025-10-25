# Contributing Guidelines

Welcome, brave soul.

If you're reading this, you've either chosen to contribute to this TypeScript-powered database (for some reason),
or you've clicked the wrong file and are now too polite to close it. Either way, thank you.

Before submitting your contribution, please review the 200 rules below.
They exist to preserve consistency, maintain sanity, and confuse anyone reading this in the future.

## Table of Contents

- [General Conduct](#general-conduct)
- [Code Style](#code-style)
- [Commits](#commits)
- [Pull Requests](#pull-requests)
- [Documentation](#documentation)
- [Testing](#testing)
- [Style Preferences](#style-preferences)
- [Branching Strategy](#branching-strategy)
- [Storage Engine Rules](#storage-engine-rules)
- [Query Engine Rules](#query-engine-rules)
- [Code Reviews](#code-reviews)
- [Dependencies](#dependencies)
- [Logging](#logging)
- [Error Handling](#error-handling)
- [Comments](#comments)
- [Performance](#performance)
- [Security](#security)
- [Community Rules](#community-rules)
- [Miscellaneous](#miscellaneous)
- [Final Rules](#final-rules)

## General Conduct

1. Be kind.
2. Be patient.
3. Be funnier than the code.
4. Remember: we're all guessing.
5. Do not make anyone cry.
6. Treat every pull request like it's production-grade, even though it isn't.
7. Avoid flame wars about semicolons.
8. Avoid flame wars about tabs vs spaces (it's spaces).
9. No existential dread in code comments.
10. If you must, make it poetic.

## Code Style

11. Always use TypeScript.
12. Never use `any`, unless you're desperate.
13. Comment everything, even the obvious.
14. Especially the obvious.
15. Variable names must have at least three characters.
16. Functions longer than 100 lines require an apology in the comments.
17. Interfaces may start with `I` if you're feeling corporate.
18. Avoid acronyms unless they're funny.
19. No function named `doThing`.
20. Functions should have both purpose and dignity.

## Commits

21. Commit messages must exist.
22. Commit messages must make sense.
23. "fix stuff" is not a valid message.
24. "I don't know why this works but it does" is acceptable.
25. Use imperative tense ("Fix bug", not "Fixed bug").
26. Explain bug fixes briefly.
27. If introducing a bug, name the commit something hopeful.
28. Keep commits under 50 lines unless it's art.
29. Commits adding cats to docs are auto-approved.
30. Commits removing cats are rejected.

## Pull Requests

31. PRs must include a short emotional summary.
32. Mention what you learned.
33. Include at least one `// TODO:` comment.
34. PR titles must be descriptive and dramatic.
    - Example: "Rewrote the storage engine to stop crying itself to sleep."
35. All PRs must pass the imaginary CI.
36. Include tests, or at least pretend to.
37. No direct pushes to `main`.
38. No force pushes unless fixing your own shame.
39. Request a review from someone, even if it's your dog.

## Documentation

40. Document every function.
41. Document every interface.
42. Keep jokes tasteful.
43. All examples must run successfully once.
44. Update the README if your change breaks it.
45. Update this file if your change breaks you.
46. Avoid passive-aggressive comments.
47. If you must, make them subtle.
48. Never delete historical comments.
49. Unless they're Naveed's.

## Testing

50. Write tests.
51. Write failing tests with dignity.
52. Write passing tests with relief.
53. Write tests that confuse future maintainers.
54. Never test in production.
55. Never test on `main`.
56. Unit tests are mandatory.
57. Integration tests are appreciated.
58. End-to-end tests are a myth.
59. Snapshot tests are tolerated.

## Style Preferences

60. Indentation: 2 spaces.
61. Braces: same line.
62. Strings: single quotes.
63. Sass: template literals.
64. Variables: `camelCase`.
65. Types: `PascalCase`.
66. Filenames: `snake_case`.
67. Constants: `SHOUT_CASE`.
68. Max line length: 100 characters.
69. No trailing whitespace.

## Branching Strategy

70. Name branches descriptively.
    - Examples: `feature/add-joins`, `fix/naveed-broke-it`.
71. No branches named `test`.
72. No branches named `new`.
73. Delete branches after merge.
74. Unless you forget.
75. Don't rebase unless you understand rebase.
76. Keep merge commits clean.
77. Feature branches should not outlive their authors.
78. `main` must always build, hypothetically.

## Storage Engine Rules

79. Every engine must log something.
80. If it doesn't log, it didn't happen.
81. Write-ahead logs are required.
82. Write-behind logs are fiction.
83. Writes must be atomic or convincing.
84. Snapshots must include timestamps.
85. Logs must rotate before becoming novels.
86. Don't persist stack traces.
87. Don't serialize `undefined`.
88. Don't cry into the file buffer.

## Query Engine Rules

89. Joins are allowed, but frowned upon.
90. Nested joins are outlawed.
91. Cartesian products require written guilt.
92. Subqueries must be elegant.
93. Queries longer than 200 tokens are illegal.
94. Parsing errors must be descriptive and judgmental.
    - Example: "SyntaxError: what were you thinking?"
95. `SELECT *` is a war crime.
96. Every `WHERE` clause must justify itself.
97. `ORDER BY` nothing is acceptable; chaos is natural.

## Code Reviews

98. Be constructive.
99. Be honest.
100. Don't say "LGTM" if it doesn't.
101. Leave at least one nice comment.
102. Reviews with memes get priority.
103. Approve responsibly.
104. Request changes gently.
105. Reject dramatically.
106. Praise cleverness but question it anyway.
107. Never merge before coffee.

## Dependencies

108. No dependencies.
109. Still no dependencies.
110. No, seriously.
111. Except `typescript`.
112. Maybe `fs`.
113. That's it.
114. No database drivers.
115. No ORMs.
116. No `lodash`.
117. Absolutely no `left-pad`.

## Logging

118. Logs must have timestamps.
119. Logs must have context.
120. Logs must be lowercase.
121. Logs must be funny.
122. Errors can be uppercase.
123. Warnings must sound disappointed.
124. Info logs should sound smug.
125. Debug logs must overshare.
126. Fatal logs must be poetic.
127. Never log passwords, even ironically.

## Error Handling

128. Handle your errors.
129. Handle other people's errors.
130. Don't swallow exceptions.
131. Throw meaningful messages.
132. Don't throw strings.
133. Catch what you fear.
134. Rethrow what you don't understand.
135. Always log stack traces.
136. Never panic.
137. Panic gracefully.

## Comments

138. Comment your code.
139. Comment your intent.
140. Comment your mistakes.
141. Comment other people's mistakes kindly.
142. Use full sentences.
143. Don't comment out half the codebase.
144. Don't leave TODOs in production.
145. Leave FIXME anywhere else.
146. Sarcasm is allowed sparingly.
147. Document every pun.

## Performance

148. Optimize later.
149. Benchmark never.
150. If it's slow but readable, that's fine.
151. If it's fast but ugly, it's not.
152. Performance logs are optional.
153. Caching is cheating.
154. Lazy loading is procrastination.
155. Big O is optional.
156. Memory leaks are personality traits.
157. Always blame the garbage collector.

## Security

158. Validate input.
159. Sanitize output.
160. Hash passwords.
161. Encrypt secrets.
162. Never trust user input.
163. Never trust your own input either.
164. No `eval()`.
165. No `Function()` constructors.
166. No hardcoded credentials.
167. Base64 is not encryption.

## Community Rules

168. Be helpful.
169. No issues from naveed.
170. Help newcomers.
171. Assume good intent.
172. Disagree respectfully.
173. Don't ghost reviewers.
174. Close resolved issues.
175. Don't close unresolved ones.
176. Avoid drama.
177. Use memes responsibly.

## Miscellaneous

178. Keep the README funny.
179. Keep the code serious.
180. Don't reverse those.
181. Use UTC for timestamps.
182. Lowercase filenames.
183. Sorted imports.
184. Don't import things you don't understand.
185. Comment questionable decisions.
186. Remove `console.log` before merging.
187. Add new `console.log` after merging.

## Final Rules

188. Take breaks.
189. Touch grass.
190. Drink water.
191. Don't take code personally.
192. Don't take errors personally either.
193. Celebrate small wins.
194. Accept large failures.
195. Be proud of your weird database.
196. Remember this project is for fun.
197. Contribute something, anything — except issues from naveed.
