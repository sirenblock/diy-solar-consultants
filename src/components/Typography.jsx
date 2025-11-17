/**
 * Typography Components
 * Professional, consistent typography system with proper hierarchy
 */

export function H1({ children, className = '', as = 'h1' }) {
  const Component = as
  return (
    <Component className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${className}`}>
      {children}
    </Component>
  )
}

export function H2({ children, className = '', as = 'h2' }) {
  const Component = as
  return (
    <Component className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${className}`}>
      {children}
    </Component>
  )
}

export function H3({ children, className = '', as = 'h3' }) {
  const Component = as
  return (
    <Component className={`text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug ${className}`}>
      {children}
    </Component>
  )
}

export function H4({ children, className = '', as = 'h4' }) {
  const Component = as
  return (
    <Component className={`text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight leading-snug ${className}`}>
      {children}
    </Component>
  )
}

export function H5({ children, className = '', as = 'h5' }) {
  const Component = as
  return (
    <Component className={`text-lg md:text-xl lg:text-2xl font-semibold tracking-tight leading-normal ${className}`}>
      {children}
    </Component>
  )
}

export function H6({ children, className = '', as = 'h6' }) {
  const Component = as
  return (
    <Component className={`text-base md:text-lg lg:text-xl font-semibold tracking-tight leading-normal ${className}`}>
      {children}
    </Component>
  )
}

// Body text components for consistency
export function Paragraph({ children, className = '', size = 'base' }) {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  }

  return (
    <p className={`${sizeClasses[size]} leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export function Lead({ children, className = '' }) {
  return (
    <p className={`text-lg md:text-xl leading-relaxed text-neutral-600 ${className}`}>
      {children}
    </p>
  )
}

export function Small({ children, className = '' }) {
  return (
    <small className={`text-sm leading-normal ${className}`}>
      {children}
    </small>
  )
}

export function Muted({ children, className = '' }) {
  return (
    <p className={`text-sm text-neutral-500 leading-normal ${className}`}>
      {children}
    </p>
  )
}

// Text emphasis components
export function Strong({ children, className = '' }) {
  return (
    <strong className={`font-semibold ${className}`}>
      {children}
    </strong>
  )
}

export function Emphasis({ children, className = '' }) {
  return (
    <em className={`italic ${className}`}>
      {children}
    </em>
  )
}

// Display text for hero sections
export function Display({ children, className = '' }) {
  return (
    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none ${className}`}>
      {children}
    </h1>
  )
}

// Gradient text for emphasis
export function GradientText({ children, className = '' }) {
  return (
    <span className={`bg-gradient-to-r from-solar-600 to-energy-600 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}
