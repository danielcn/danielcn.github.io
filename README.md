# Daniel Nascimento's Personal Website

This repository contains the source code for my personal website, built with [Jekyll](https://jekyllrb.com/).

## Prerequisites

- Ruby (version 2.5.0 or higher)
- Bundler (`gem install bundler`)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielcn/danielcn.github.io.git
   cd danielcn.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

## Running Locally

To serve the site locally and watch for changes:

```bash
bundle exec jekyll serve
```

Open your browser and navigate to `http://localhost:4000`.

## Troubleshooting

If you encounter an error like:
```
Could not find eventmachine-1.2.7, http_parser.rb-0.8.0, sassc-2.4.0 in any of the sources
Run `bundle install` to install missing gems.
```
This means the required dependencies are not installed on your system. Simply run:
```bash
bundle install
```
to install them.

