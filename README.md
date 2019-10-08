# Togglog Cli

Command line utility to log time entries and more using toggl ![Heavy WIP](https://img.shields.io/badge/-Work%20in%20Progress-red)

## Installation

```bash
npm i toggler-cli -g
```

## Usage

```bash
togglog <command>

Commands:
  togglog log <project> <duration>          Logs a time entry
  [description]
  togglog projects <command>                Access projects        [aliases: pr]
  togglog time <command>                    Access time entries
  togglog workspaces <command>              Access worspaces       [aliases: ws]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### Log Time

```bash
togglog log <project> <duration> [description]

Positionals:
  project      Name or partial name of the project                    [required]
  duration     Duration in format hh:mm:ss or hh:mm or mm. To log 2 hours 2:00
               or 120 can be provided as duration                     [required]
  description  Textual description of what you did
```

Example

```bash
togglog log Test 1:45 "Implement API client"
```