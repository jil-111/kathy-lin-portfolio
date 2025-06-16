# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for a PM portfolio website, using:
- React 19
- TypeScript
- Tailwind CSS v4
- Next.js App Router
- Geist fonts (Sans & Mono)

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

- **App Router**: Uses Next.js App Router with `src/app/` structure
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`
- **TypeScript**: Strict mode enabled with path alias `@/*` → `./src/*`
- **Layout**: Single root layout in `src/app/layout.tsx`

## File Structure

- `src/app/` - App Router pages and layouts
- `public/` - Static assets (SVG icons)
- Configuration files in root