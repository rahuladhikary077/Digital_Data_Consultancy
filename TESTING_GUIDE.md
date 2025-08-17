# Dropdown Navigation Testing Guide

## Overview
This guide provides comprehensive testing steps for the newly implemented dropdown navigation menus in the Digital Data Consultancy website.

## Test Environment Setup

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access the application:**
   Open http://localhost:5179/ in your browser

## Desktop Testing Checklist

### ✅ Basic Functionality
- [ ] All top navigation items with caret (About, Services, Industries, Resources) show dropdown menus on click
- [ ] Contact link navigates directly to /contact without dropdown
- [ ] Only one dropdown can be open at a time
- [ ] Clicking outside any dropdown closes the open dropdown
- [ ] Pressing ESC key closes any open dropdown

### ✅ Visual Design
- [ ] Dropdown background matches dark theme (#0a1929)
- [ ] Text color is light gray (#gray-200) with white hover state
- [ ] Dropdown has proper shadow (shadow-xl)
- [ ] Dropdown has 8px vertical offset from nav item
- [ ] Dropdown width is 224px (w-56)
- [ ] Smooth fade and translate animation (200ms duration)

### ✅ Keyboard Navigation
- [ ] Tab navigation works properly through all nav items
- [ ] Pressing Enter or Space on dropdown trigger opens the dropdown
- [ ] Focus moves to first dropdown item when opened
- [ ] Tab cycles through dropdown items properly
- [ ] Shift+Tab cycles backwards through items
- [ ] After last item, tab moves to next nav item
- [ ] ESC key closes dropdown and returns focus to trigger

### ✅ Accessibility
- [ ] All dropdown triggers have `aria-haspopup="true"`
- [ ] `aria-expanded` toggles between true/false correctly
- [ ] Dropdown container has `role="menu"`
- [ ] Each dropdown link has `role="menuitem"`
- [ ] Focus outlines are visible on keyboard navigation
- [ ] Screen readers announce dropdown state correctly

### ✅ Navigation
- [ ] All dropdown links navigate to correct routes:
  - About → Company Overview (/company-overview)
  - About → Career (/career)
  - Services → Data Analytics (/services/data-analytics)
  - Services → Machine Learning (/services/machine-learning)
  - Services → Data Governance (/services/data-governance)
  - Industries → Manufacturing (/industries/manufacturing)
  - Industries → Healthcare (/industries/healthcare)
  - Resources → Blogs (/resources/blogs)
  - Resources → Case Studies (/resources/case-studies)

## Mobile Testing Checklist (≤ 767px)

### ✅ Basic Functionality
- [ ] Hamburger menu button appears on mobile
- [ ] Clicking hamburger opens full-screen drawer
- [ ] Drawer has dark theme matching desktop (#02101F)
- [ ] All nav items are visible in drawer
- [ ] Dropdown items appear as expandable accordions
- [ ] Chevron icons rotate when expanded
- [ ] Tapping outside drawer closes it
- [ ] ESC key closes drawer

### ✅ Mobile Navigation
- [ ] All links are tappable (minimum 44px height)
- [ ] Drawer closes when any link is tapped
- [ ] Smooth slide-in animation for drawer
- [ ] Proper scroll behavior (body scroll locked when drawer open)

### ✅ Mobile Visual Design
- [ ] Full-width drawer on mobile
- [ ] Proper spacing between items
- [ ] White text on dark background
- [ ] Hover states work on touch devices
- [ ] Chevron animations are smooth

## Automated Testing (Optional)

### React Testing Library Tests
```javascript
// Example test for dropdown functionality
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/common/Header';

describe('Dropdown Navigation', () => {
  test('dropdown opens on click', () => {
    render(<Header />);
    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  test('dropdown closes on ESC', () => {
    render(<Header />);
    const aboutButton = screen.getByText('About');
    fireEvent.click(aboutButton);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
```

## Browser Compatibility Testing

Test on the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Performance Testing

- [ ] No console errors or warnings
- [ ] Smooth animations on all devices
- [ ] Fast initial load time
- [ ] No memory leaks when opening/closing dropdowns repeatedly

## Edge Cases to Test

- [ ] Rapid clicking on multiple dropdown triggers
- [ ] Opening dropdown while another is closing
- [ ] Navigating with keyboard while dropdown is open
- [ ] Resizing browser window while dropdown is open
- [ ] Opening dropdown then quickly navigating to another page
- [ ] Testing with screen readers (NVDA, JAWS, VoiceOver)

## Troubleshooting Common Issues

### Dropdown not opening
1. Check browser console for errors
2. Verify JavaScript is enabled
3. Ensure all React components are properly imported

### Styling issues
1. Check if Tailwind CSS is properly configured
2. Verify custom CSS variables are defined
3. Ensure no conflicting styles

### Navigation issues
1. Verify all routes exist in Routes.jsx
2. Check that page components are properly exported
3. Ensure no 404 errors when navigating

## Test Results Template

```
Date: [Current Date]
Tester: [Your Name]
Browser: [Browser and Version]
Device: [Desktop/Mobile/Tablet]

Desktop Tests:
- [ ] All dropdowns open correctly
- [ ] Keyboard navigation works
- [ ] Visual design matches requirements
- [ ] All links navigate correctly

Mobile Tests:
- [ ] Drawer opens correctly
- [ ] Accordion functionality works
- [ ] Touch targets are adequate
- [ ] Navigation works smoothly

Issues Found:
[List any issues discovered]

Notes:
[Additional observations]
```

## Quick Test Commands

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Run tests (if available)
npm test
