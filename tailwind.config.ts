
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				'heading': ['Space Grotesk', 'Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'mono': ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					secondary: 'hsl(var(--accent-secondary))',
					tertiary: 'hsl(var(--accent-tertiary))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float-luxury': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-12px) rotate(2deg)' },
					'50%': { transform: 'translateY(-8px) rotate(0deg)' },
					'75%': { transform: 'translateY(-16px) rotate(-2deg)' }
				},
				'pulse-luxury': {
					'0%, 100%': { 
						boxShadow: '0 10px 15px hsla(220, 15%, 8%, 0.1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsla(200, 100%, 45%, 0.4)',
						filter: 'brightness(1.1)'
					}
				},
				'slide-up-luxury': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(2px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0)'
					}
				},
				'scale-luxury': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.9) rotate(-2deg)',
						filter: 'blur(4px)'
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) rotate(0deg)',
						filter: 'blur(0)'
					}
				},
				'shimmer-luxury': {
					'0%': { 
						backgroundPosition: '-200% center', 
						filter: 'brightness(1)'
					},
					'50%': {
						filter: 'brightness(1.1)'
					},
					'100%': { 
						backgroundPosition: '200% center', 
						filter: 'brightness(1)'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'accordion-up': 'accordion-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
				'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
				'float-luxury': 'float-luxury 8s ease-in-out infinite',
				'pulse-luxury': 'pulse-luxury 6s ease-in-out infinite',
				'slide-up-luxury': 'slide-up-luxury 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-luxury': 'scale-luxury 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'shimmer-luxury': 'shimmer-luxury 4s linear infinite',
				'rotate-slow': 'rotate-slow 25s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--accent) / 0.12) 0%, hsl(var(--accent-secondary) / 0.08) 40%, transparent 70%)',
				'luxury-gradient': 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-secondary)) 50%, hsl(var(--accent-tertiary)) 100%)',
				'glass-gradient': 'linear-gradient(135deg, hsl(var(--background) / 0.95) 0%, hsl(var(--muted) / 0.85) 100%)',
				'mesh-gradient': 'radial-gradient(at 40% 20%, hsl(var(--accent) / 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--accent-secondary) / 0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--accent-tertiary) / 0.12) 0px, transparent 50%)',
				'premium-shimmer': 'linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0.1) 50%, transparent 100%)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem'
			},
			blur: {
				'xs': '2px',
				'4xl': '72px',
				'5xl': '96px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
