# UI Component Library

This directory contains reusable UI components for the Archi Magazine application.

## Components

### Layout Components

#### Header
A responsive header component with navigation and search functionality.

```jsx
import { Header } from './ui';

<Header
  title="Archi"
  subtitle="Magazine"
  navItems={["Home", "Our Work", "Architecture", "Contact Us"]}
  showSearch={true}
/>
```

#### Container
A container component for consistent layout spacing.

```jsx
import { Container } from './ui';

<Container maxWidth="1400px" className="py-12">
  {/* Content */}
</Container>
```

#### Grid
A flexible grid system component.

```jsx
import { Grid } from './ui';

<Grid cols={12} gap={12}>
  {/* Grid items */}
</Grid>
```

#### Sidebar
A sidebar component with optional page numbers and social links.

```jsx
import { Sidebar } from './ui';

<Sidebar
  position="left"
  showPageNumber={true}
  pageNumber={1}
  showSocials={true}
>
  {/* Sidebar content */}
</Sidebar>
```

### Content Components

#### ImageCard
A card component for displaying images with shadows and effects.

```jsx
import { ImageCard } from './ui';

<ImageCard
  src="image-url"
  alt="Image description"
  className="w-full h-[480px]"
  showShadow={true}
  showGradient={true}
/>
```

#### ArticleCard
A card component for displaying article previews.

```jsx
import { ArticleCard } from './ui';

<ArticleCard
  article={articleData}
  isActive={false}
  onClick={() => handleClick()}
  showImage={true}
  showNumber={true}
/>
```

#### Card
A general-purpose card component.

```jsx
import { Card } from './ui';

<Card
  padding="p-6"
  shadow="shadow-md"
  hover="hover:shadow-lg"
  onClick={() => handleClick()}
>
  {/* Card content */}
</Card>
```

### Interactive Components

#### Button
A button component with multiple variants and sizes.

```jsx
import { Button } from './ui';

<Button
  variant="primary" // primary, secondary, outline, ghost
  size="medium"     // small, medium, large
  onClick={() => handleClick()}
>
  Button Text
</Button>
```

#### Modal
A modal component for displaying content overlays.

```jsx
import { Modal } from './ui';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="medium" // small, medium, large, xlarge
>
  {/* Modal content */}
</Modal>
```

### Typography Components

#### Heading
Heading components with different levels and variants.

```jsx
import { Heading } from './ui';

<Heading level={1} variant="default">
  Main Heading
</Heading>
```

#### Subtitle
Subtitle components for secondary headings.

```jsx
import { Subtitle } from './ui';

<Subtitle variant="default">
  Subtitle Text
</Subtitle>
```

#### BodyText
Body text components for paragraphs.

```jsx
import { BodyText } from './ui';

<BodyText variant="default">
  Paragraph text content.
</BodyText>
```

#### Caption
Caption components for small text elements.

```jsx
import { Caption } from './ui';

<Caption variant="default">
  Caption text
</Caption>
```

## Usage

All components can be imported from the main index file:

```jsx
import {
  Header,
  Button,
  Modal,
  Heading,
  BodyText
} from './ui';
```

## Styling

Components use Tailwind CSS classes and are designed to work with the existing design system. They include:

- Responsive design
- Hover and focus states
- Consistent spacing and typography
- Dark/light theme support
- Accessibility features

## Customization

Most components accept className props for additional customization:

```jsx
<Button className="custom-class">
  Custom Button
</Button>
```

## Props

Each component accepts specific props for configuration. Check the individual component files for detailed prop documentation.
