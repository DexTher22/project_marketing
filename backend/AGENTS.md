<laravel-boost-guidelines>
=== foundation rules ===

# Laravel Boost Guidelines

## Foundational Context

This application is a Laravel application running on PHP 8.4. Always use the APIs that match the installed major version of each package — do not assume a version.

Before relying on a package's API, confirm its installed version:
- PHP packages: run `composer show --direct` to list direct dependencies with versions, or `composer show <vendor/package>` for a single package.
- JS packages: check `package.json` for the installed versions.

## Skills Activation

This project has domain-specific skills available in `**/skills/**`. You MUST activate the relevant skill whenever you work in that domain—don't wait until you're stuck.

## Conventions

- You must follow all existing code conventions used in this application. When creating or editing a file, check sibling files for the correct structure, approach, and naming.
- Use descriptive names for variables and methods. For example, `isRegisteredForDiscounts`, not `discount()`.
- Check for existing components to reuse before writing a new one.

## Verification Scripts

- Do not create verification scripts or tinker when tests cover that functionality and prove they work. Unit and feature tests are more important.

## Application Structure & Architecture

- Stick to existing directory structure; don't create new base folders without approval.
- Do not change the application's dependencies without approval.

## Frontend Bundling

- If a frontend change doesn't show in the UI or you get a "Unable to locate file in Vite manifest" error, run `npm run build` or ask the user to run `npm run dev` or `composer run dev`.

## Documentation Files

- You must only create documentation files if explicitly requested by the user.

=== boost rules ===

# Laravel Boost

## Tools

- Laravel Boost is an MCP server with tools designed specifically for this application. Prefer Boost tools over manual alternatives like shell commands or file reads.
- Use `database-query` to run read-only queries against the database instead of writing raw SQL in tinker.
- Use `database-schema` to inspect table structure before writing migrations or models.
- Use `get-absolute-url` to resolve the correct scheme, domain, and port for project URLs. Always use this before sharing a URL with the user.
- Use `browser-logs` to read browser logs, errors, and exceptions. Only recent logs are useful, ignore old entries.

## Searching Documentation (IMPORTANT)

- Use `search-docs` before changes that depend on Laravel ecosystem APIs, behavior, configuration, or version-specific syntax. Skip it for copy-only edits and other changes where package documentation is irrelevant. Reuse sufficient results already in context instead of searching again.
- Pass a `packages` array to scope results when you know which packages are relevant.
- Use multiple broad, topic-based queries: `['rate limiting', 'routing rate limiting', 'routing']`. Expect the most relevant results first.
- Do not add package names to queries because package info is already shared. Use `test resource table`, not `filament 4 test resource table`.

### Search Syntax

1. Use words for auto-stemmed AND logic: `rate limit` matches both "rate" AND "limit".
2. Use `"quoted phrases"` for exact position matching: `"infinite scroll"` requires adjacent words in order.
3. Combine words and phrases for mixed queries: `middleware "rate limit"`.
4. Use multiple queries for OR logic: `queries=["authentication", "middleware"]`.

## Project Rules

- This project contains committed, area-grouped rules in `.ai/rules` when that directory exists, including path-scoped framework guidelines under `.ai/rules/boost`. Before you enter plan mode or create/edit any file, you MUST first: open @.ai/rules/index.md (it maps file globs to rule files), read every rule file whose globs cover the path(s) in scope, and run `grep -rin 'keyword' .ai/rules` to catch what a path match alone misses. Do not write code until you have read and are following every matching rule. If `.ai/rules` does not exist, continue without it.

## Artisan

- Run Artisan commands directly via the command line (e.g., `php artisan route:list`). Use `php artisan list` to discover available commands and `php artisan [command] --help` to check parameters.
- Inspect routes with `php artisan route:list`. Filter with: `--method=GET`, `--name=users`, `--path=api`, `--except-vendor`, `--only-vendor`.
- Read configuration values using dot notation: `php artisan config:show app.name`, `php artisan config:show database.default`. Or read config files directly from the `config/` directory.

## Tinker

- Execute PHP in app context for debugging and testing code. Do not create models without user approval, prefer tests with factories instead. Prefer existing Artisan commands over custom tinker code.
- Always use single quotes to prevent shell expansion: `php artisan tinker --execute 'Your::code();'`
  - Double quotes for PHP strings inside: `php artisan tinker --execute 'User::where("active", true)->count();'`

=== php rules ===

# PHP

- Always use curly braces for control structures, even for single-line bodies.
- Use PHP 8 constructor property promotion: `public function __construct(public GitHub $github) { }`. Do not leave empty zero-parameter `__construct()` methods unless the constructor is private.
- Use explicit return type declarations and type hints for all method parameters: `function isAccessible(User $user, ?string $path = null): bool`
- Use TitleCase for Enum keys: `FavoritePerson`, `BestLake`, `Monthly`.
- Prefer PHPDoc blocks over inline comments. Only add inline comments for exceptionally complex logic.
- Use array shape type definitions in PHPDoc blocks.

=== deployments rules ===

# Deployment

- Laravel can be deployed using [Laravel Cloud](https://cloud.laravel.com/), which is the fastest way to deploy and scale production Laravel applications.
- Activate the `deploying-to-cloud` skill whenever deploying to Laravel Cloud, configuring Cloud environments or resources, using the Cloud CLI, or troubleshooting Cloud deployments.

=== laravel/core rules ===

# Do Things the Laravel Way

- Use `php artisan make:` commands to create new files (i.e. migrations, controllers, models, etc.). You can list available Artisan commands using `php artisan list` and check their parameters with `php artisan [command] --help`.
- If you're creating a generic PHP class, use `php artisan make:class`.
- Pass `--no-interaction` to all Artisan commands to ensure they work without user input. You should also pass the correct `--options` to ensure correct behavior.

### Model Creation

- When creating new models, create useful factories and seeders for them too. Ask the user if they need any other things, using `php artisan make:model --help` to check the available options.

## APIs & Eloquent Resources

- For APIs, default to using Eloquent API Resources and API versioning unless existing API routes do not, then you should follow existing application convention.

## URL Generation

- When generating links to other pages, prefer named routes and the `route()` function.

## Testing

- When creating models for tests, use the factories for the models. Check if the factory has custom states that can be used before manually setting up the model.
- Faker: Use methods such as `$this->faker->word()` or `fake()->randomDigit()`. Follow existing conventions whether to use `$this->faker` or `fake()`.
- When creating tests, make use of `php artisan make:test [options] {name}` to create a feature test, and pass `--unit` to create a unit test. Most tests should be feature tests.

=== pint/core rules ===

# Laravel Pint Code Formatter

- If you have modified any PHP files, you must run `vendor/bin/pint --dirty --format agent` before finalizing changes to ensure your code matches the project's expected style.
- Do not run `vendor/bin/pint --test --format agent`, simply run `vendor/bin/pint --format agent` to fix any formatting issues.

=== phpunit/core rules ===

# PHPUnit

- This project uses PHPUnit. Create tests with `php artisan make:test --phpunit {name}`.
- Do not include the test suite directory in `{name}`. Use `SomeFeatureTest`, not `Feature/SomeFeatureTest`.
- Read the `testing-best-practices` skill for guidance on coverage, naming, structure, dependency isolation, and review.

## Running Tests

- Run the narrowest set of tests that covers the change. Pass a file path or `--filter=testName` to `php artisan test --compact`.
- Rerun a test after each change to it.
- Run `vendor/bin/phpunit` to call the test runner directly. It accepts the same file path and `--filter=testName` arguments.

</laravel-boost-guidelines>

# Marketing Platform – Project Guidelines

## Project Overview

This project is a school software development project.
Its purpose is to connect content creators with advertisers.

Advertisers can publish advertisements, review applications,
accept content creators, and manage projects.

Content creators can manage their profiles, browse advertisements,
submit applications, manage their portfolios, and participate
in projects.

The application also supports private messaging and a public
landing page with showcase media and a contact form.

## Communication and Development Workflow

- Communicate with the user in Hungarian.
- Use English names for classes, methods, variables, database
  tables, and columns.
- Develop the application step by step.
- Explain important technical decisions and unfamiliar Laravel
  methods in Hungarian.
- Do not implement unrelated features without user approval.
- Do not change previously agreed database structures without
  discussing the changes with the user.
- Inspect existing migrations and source files before making changes.
- Prefer simple, maintainable solutions appropriate for a school
  project.
- Avoid unnecessary architectural complexity.
- Never execute destructive database commands without approval.

## Technology Stack

- Backend: Laravel
- Development database: SQLite
- Dependency management: Composer
- Version control: Git
- Architecture: REST API with a separate frontend
- Follow Laravel conventions and the installed Laravel version.

## Database Conventions

- Use $table->id() for regular primary keys.
- Use $table->foreignId() for foreign key columns.
- Use constrained() to enforce foreign key relationships.
- Use explicit referenced columns when the referenced primary
  key is not named id.
- Use $table->timestamps() for created_at and updated_at.
- Use nullable() for optional fields.
- Use composite primary keys for simple pivot tables.
- Avoid unnecessary duplication of database fields.
- Use cascadeOnDelete() where appropriate, but consider
  preserving historical project and application data.
- Validate string lengths and numeric ranges in Laravel because
  SQLite does not enforce all column type restrictions.

## Database Structure

The following schema describes the previously discussed design.
Always inspect the actual migration files before implementation.
If the implementation differs from this description, report
the difference instead of silently changing the schema.

### users

- id: primary key
- email: string(75), unique
- password: string(255)
- role: string(20)
- email_verified_at: nullable timestamp
- is_active: boolean, default false
- remember_token
- created_at
- updated_at

Business rules:

- New users are inactive by default.
- Successful email verification sets is_active to true.
- Laravel does not automatically update is_active during
  email verification. This must be implemented explicitly.
- Keep Laravel's remember_token column.
- Suggested roles: creator, advertiser, admin.
- Authorization must be enforced on the backend.

### password_reset_tokens

Keep Laravel's password reset functionality.

### sessions

Keep Laravel's session table if database-backed sessions
are configured.

### cache and jobs

- File-based caching is sufficient for the initial version.
- If database cache tables are removed, configure CACHE_STORE=file.
- Database-backed queues may be useful for email notifications.
- Keep the jobs-related migrations if database queues are used.
- Inspect the current configuration before changing these tables.

### specializations

Stores content creator categories and specializations.

- id: primary key
- name: string(100), unique
- description: string(255)
- is_active: boolean, default true
- created_at
- updated_at

Inactive specializations should not be available for new
assignments, but existing relationships should be preserved.

### creators

Stores content creator profiles.

- user_id: primary key, foreign key to users.id
- full_name: string(100)
- bio: nullable text
- city: nullable string(100)
- phone: nullable string(30)
- avatar_path: nullable string(500)
- created_at
- updated_at

Relationship:

- User has one Creator.
- Creator belongs to User.
- The primary key is user_id, not id.
- The primary key is not auto-incrementing.

### advertisers

Stores advertiser profiles.

- user_id: primary key, foreign key to users.id
- name: string(150)
- description: nullable text
- logo_path: nullable string(500)
- email: nullable string(254)
- phone: nullable string(30)
- website_url: nullable string(500)
- created_at
- updated_at

Relationship:

- User has one Advertiser.
- Advertiser belongs to User.
- The primary key is user_id, not id.
- The primary key is not auto-incrementing.
- The contact email may differ from the login email.

### advertisements

Stores advertisements published by advertisers.

- id: primary key
- advertiser_id: foreign key to advertisers.user_id
- title: string(150)
- description: text
- location: nullable string(150)
- start_date: nullable date
- end_date: nullable date
- application_deadline: nullable timestamp
- budget: nullable decimal(12, 2)
- currency: char(3), default HUF
- status: string(30), default draft
- published_at: nullable timestamp
- created_at
- updated_at

Suggested statuses:

- draft
- published
- closed
- cancelled

Business rules:

- An advertiser can publish multiple advertisements.
- Only authorized advertisers may manage their advertisements.
- published_at must be set when an advertisement is published.
- Only eligible advertisements should accept applications.

### ad_applications

Stores applications submitted by content creators.

- id: primary key
- advertisement_id: foreign key to advertisements.id
- creator_id: foreign key to creators.user_id
- message: nullable text
- status: string(30), default pending
- created_at
- updated_at

Unique constraint:

- advertisement_id + creator_id

Suggested statuses:

- pending
- accepted
- rejected
- withdrawn

Business rules:

- A creator can apply to an advertisement only once.
- Only the advertisement owner may accept or reject applications.
- Accepting the first application automatically creates a project.
- Further accepted applicants join the same project.

### creator_specializations

Many-to-many relationship between creators and specializations.

- creator_id: foreign key to creators.user_id
- specialization_id: foreign key to specializations.id

Composite primary key:

- creator_id + specialization_id

No separate id or timestamps are required.

### advertisement_specializations

Many-to-many relationship between advertisements and
specializations.

- advertisement_id: foreign key to advertisements.id
- specialization_id: foreign key to specializations.id

Composite primary key:

- advertisement_id + specialization_id

No separate id or timestamps are required.

### portfolio_items

Stores previous work and portfolio content.

- id: primary key
- creator_id: foreign key to creators.user_id
- title: string(150)
- description: nullable text
- platform: string(50)
- video_url: string(500)
- created_at
- updated_at

Store external video URLs rather than video files in the database.

### socials

Stores social media profiles belonging to content creators.

- id: primary key
- creator_id: foreign key to creators.user_id
- platform: string(50)
- username: string(100)
- profile_url: string(500)
- created_at
- updated_at

Unique constraint:

- creator_id + platform + username

Business rules:

- Creators may have multiple accounts on the same platform.
- Duplicate accounts are not allowed for the same creator.
- Do not add a followers_count column.
- External social media API integration is not required.

### projects

Stores projects created from advertisements.

- id: primary key
- advertisement_id: foreign key to advertisements.id, unique
- status: string(30), default active
- created_at
- updated_at

Suggested statuses:

- active
- completed
- cancelled

Important design decisions:

- Each advertisement can have at most one project.
- Do not duplicate title, description, start_date, or end_date.
- Retrieve these fields through the Advertisement relationship.
- Do not duplicate advertiser_id.
- The advertiser is accessible through the advertisement.
- Changes to advertisement fields are reflected in the project.
- Discuss historical data preservation before implementing
  advertisement deletion or modification restrictions.

### project_members

Stores content creators participating in projects.

- project_id: foreign key to projects.id
- creator_id: foreign key to creators.user_id
- joined_at: timestamp, default current timestamp

Composite primary key:

- project_id + creator_id

Business rules:

- A project may have multiple creators.
- A creator may participate in multiple projects.
- Duplicate project memberships are not allowed.
- The advertiser does not need a separate membership record.
- The advertiser is identified through the project's advertisement.
- No separate id, created_at, or updated_at is required.

## Application Acceptance Workflow

When an advertiser accepts an application:

1. Verify that the authenticated advertiser owns the advertisement.
2. Verify that the application can be accepted.
3. Start a database transaction.
4. Update the application status to accepted.
5. Find or create the project associated with the advertisement.
6. Add the creator to project_members without creating duplicates.
7. Commit the transaction.

Use database constraints and transactions to ensure consistency.

All accepted applicants for the same advertisement must belong
to the same project.

## Eloquent Relationships

Use appropriate Laravel relationships:

- User hasOne Creator.
- User hasOne Advertiser.
- Creator belongsTo User.
- Advertiser belongsTo User.
- Advertiser hasMany Advertisement.
- Advertisement belongsTo Advertiser.
- Creator belongsToMany Specialization.
- Advertisement belongsToMany Specialization.
- Creator hasMany PortfolioItem.
- Creator hasMany Social.
- Creator hasMany AdApplication.
- Advertisement hasMany AdApplication.
- Advertisement hasOne Project.
- Project belongsTo Advertisement.
- Project belongsToMany Creator through project_members.
- Creator belongsToMany Project through project_members.

Important:

- Explicitly configure user_id as the primary key in Creator
  and Advertiser models.
- Set incrementing to false in these models.
- Specify custom foreign and local keys where required.
- Specify custom pivot table names.
- Include joined_at using withPivot() for project memberships.
- Do not use withTimestamps() on pivot tables without timestamps.

## Backend Implementation Guidelines

- Keep controllers focused on HTTP request and response handling.
- Use Form Request classes for request validation.
- Use service classes for complex business logic where appropriate.
- Use Eloquent relationships for database queries.
- Use eager loading to avoid N+1 query problems.
- Use database transactions for multi-step operations.
- Use Laravel authorization mechanisms to protect resources.
- Never trust user IDs or ownership information from the frontend.
- Never expose passwords or remember tokens in API responses.
- Hash passwords using Laravel's hashing functionality.
- Do not introduce additional packages without a clear reason.
- Write tests for important business rules.

## Remaining Database Migrations

The following tables still need to be reviewed and implemented:

### conversations

Stores private conversations between users.

### conversation_members

Stores users participating in conversations.

### messages

Stores messages sent within conversations.

Messaging requirements:

- Initially support text messages only.
- Users must be conversation members to access its messages.
- File attachments and multimedia messages are not required.
- Finalize the exact schema before implementation.

### contact_messages

Stores messages submitted through the public contact form.

### showcase_media

Stores media displayed on the public landing page.

The exact fields of these remaining tables must be discussed
with the user or verified against the database diagram.

## Current Development Progress

The database design and migration discussions have progressed
through the project_members table.

The next planned step is the messaging database structure:

1. conversations
2. conversation_members
3. messages

After that:

4. contact_messages and showcase_media migrations
5. Verify all migrations and database relationships
6. Eloquent models and relationships
7. Database seeders
8. Authentication and email verification
9. Profile management
10. Advertisement management
11. Application management
12. Project management
13. Private messaging
14. API testing

This is a proposed development order, not a requirement to
implement everything at once.

Always inspect the current repository to determine the actual
implementation progress before starting a task.
