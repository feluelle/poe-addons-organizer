# poe-addons-organizer
This tool helps organizing all your poe addons. So you only have one application to install and can keep tracking your addons for updates, etc.

Java 9 Application
- Gradle
- GraphQL
- JavaFX

## Features
- **auto.** find poe tools on GitHub
- add the possibility to **manually** add non-GitHub projects to the app
- display all tools in a form
- display tools in most-used order
- download tools
- "check for updates" 
- ...

## Notes
Find all poe repos via the GitHub v4 GraphQL API
https://developer.github.com/v4/explorer/
```
{
  search(query: "topic:poe", type: REPOSITORY, first: 100) {
    nodes {
      ... on Repository {
        description
      }
    }
  }
}
```
