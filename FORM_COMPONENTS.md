# Form Components Documentation

Modern, accessible form components with floating labels, validation states, and enhanced UX.

## Components

### Input

A text input component with floating labels and validation states.

**Features:**
- Floating labels that animate on focus
- Success and error states with icons
- Helper text support
- Accessible ARIA attributes
- Auto-sizing based on content

**Usage:**
```jsx
import Input from './components/Input'

<Input
  id="email"
  name="email"
  type="email"
  label="Email Address *"
  value={formData.email}
  onChange={handleChange}
  error={errors.email}
  success={!errors.email && formData.email}
  helperText="We'll never share your email"
  autoComplete="email"
/>
```

**Props:**
- `label` (string): The floating label text
- `error` (string): Error message to display
- `success` (boolean): Show success state with checkmark
- `helperText` (string): Helper text below input
- `...props`: All standard input props (type, value, onChange, etc.)

---

### TextArea

A textarea component with floating labels, character count, and validation.

**Features:**
- Floating labels
- Character count display
- Max length support
- Success and error states
- Resizable

**Usage:**
```jsx
import TextArea from './components/TextArea'

<TextArea
  id="message"
  name="message"
  label="Message *"
  value={formData.message}
  onChange={handleChange}
  error={errors.message}
  success={!errors.message && formData.message.length >= 10}
  charCount
  maxLength={1000}
  rows={5}
  helperText="Tell us about your project"
/>
```

**Props:**
- `label` (string): The floating label text
- `error` (string): Error message to display
- `success` (boolean): Show success state
- `helperText` (string): Helper text below textarea
- `charCount` (boolean): Show character count
- `maxLength` (number): Maximum character length
- `rows` (number): Number of rows (default: 5)
- `...props`: All standard textarea props

---

### Select

A select dropdown component with floating labels.

**Features:**
- Floating labels
- Custom dropdown arrow
- Success and error states
- Helper text support

**Usage:**
```jsx
import Select from './components/Select'

<Select
  id="state"
  name="state"
  label="State *"
  value={formData.state}
  onChange={handleChange}
  error={errors.state}
  success={!errors.state && formData.state}
  helperText="Select your state"
>
  <option value="">Select state</option>
  <option value="CA">California</option>
  <option value="TX">Texas</option>
</Select>
```

**Props:**
- `label` (string): The floating label text
- `error` (string): Error message to display
- `success` (boolean): Show success state
- `helperText` (string): Helper text below select
- `children` (ReactNode): Option elements
- `...props`: All standard select props

---

### Checkbox

A styled checkbox component with label and description.

**Features:**
- Custom styling with Tailwind
- Label and description support
- Error states
- Accessible

**Usage:**
```jsx
import Checkbox from './components/Checkbox'

<Checkbox
  id="newsletter"
  name="newsletter"
  checked={formData.newsletter}
  onChange={handleChange}
  label="Send me DIY solar tips and guides"
  description="We send helpful guides and updates (unsubscribe anytime)"
  error={errors.newsletter}
/>
```

**Props:**
- `label` (string): The checkbox label
- `description` (string): Additional description text
- `error` (string): Error message to display
- `...props`: All standard checkbox props (checked, onChange, etc.)

---

## Design Principles

### 1. Modern & Minimal
- Clean, professional design
- Subtle animations and transitions
- Consistent spacing and sizing (h-12 for inputs)

### 2. Accessibility
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- High contrast error states

### 3. Validation States

**Error State:**
- Red border (border-red-500)
- Error icon
- Error message below field

**Success State:**
- Green border (border-green-500)
- Checkmark icon
- Optional success message

**Focus State:**
- Brand color ring (ring-solar-500)
- Label color change
- Smooth transitions

### 4. Responsive
- Works on all screen sizes
- Touch-friendly (larger tap targets)
- Mobile-optimized

---

## Color Scheme

- **Default Border:** `border-gray-300`
- **Focus Border:** `border-solar-500`
- **Error Border:** `border-red-500`
- **Success Border:** `border-green-500`
- **Focus Ring:** `ring-solar-500`
- **Label (default):** `text-gray-600`
- **Label (focus):** `text-solar-600`

---

## Example: Complete Form

```jsx
import { useState } from 'react'
import Input from './components/Input'
import TextArea from './components/TextArea'
import Select from './components/Select'
import Checkbox from './components/Checkbox'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    message: '',
    newsletter: false
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    // Validate field
  }

  return (
    <form className="space-y-6">
      <Input
        id="name"
        name="name"
        type="text"
        label="Full Name *"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        success={touched.name && !errors.name && formData.name}
      />

      <Input
        id="email"
        name="email"
        type="email"
        label="Email Address *"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && errors.email}
        success={touched.email && !errors.email && formData.email}
      />

      <Select
        id="state"
        name="state"
        label="State *"
        value={formData.state}
        onChange={handleChange}
        error={touched.state && errors.state}
      >
        <option value="">Select state</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
      </Select>

      <TextArea
        id="message"
        name="message"
        label="Message *"
        value={formData.message}
        onChange={handleChange}
        charCount
        maxLength={500}
      />

      <Checkbox
        id="newsletter"
        name="newsletter"
        checked={formData.newsletter}
        onChange={handleChange}
        label="Subscribe to newsletter"
      />

      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  )
}
```

---

## Files Updated

- ✅ `/src/components/Input.jsx` - New component
- ✅ `/src/components/TextArea.jsx` - New component
- ✅ `/src/components/Select.jsx` - New component
- ✅ `/src/components/Checkbox.jsx` - New component
- ✅ `/src/components/ContactForm.jsx` - Updated to use new components
- ✅ `/src/components/FormStep1.jsx` - Updated to use new components
- ✅ `/src/components/FormStep2.jsx` - Updated to use new components
- ✅ `/src/components/FormStep3.jsx` - Updated to use new components

---

## Testing Checklist

- [ ] Tab navigation works correctly
- [ ] Labels animate smoothly on focus
- [ ] Error states display properly
- [ ] Success states show checkmarks
- [ ] Character count updates correctly
- [ ] Helper text displays appropriately
- [ ] Mobile touch targets are adequate
- [ ] Screen reader announces labels and errors
- [ ] Form validation works as expected
- [ ] All fields are keyboard accessible
