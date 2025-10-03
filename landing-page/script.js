// Interactive functionality for the landing page

document.addEventListener('DOMContentLoaded', function() {
    // SDK Tab switching
    const sdkTabs = document.querySelectorAll('.sdk-tab');
    const sdkCodes = document.querySelectorAll('.sdk-code');
    
    sdkTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetLang = this.dataset.lang;
            
            // Remove active class from all tabs and codes
            sdkTabs.forEach(t => t.classList.remove('active'));
            sdkCodes.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding code
            this.classList.add('active');
            document.querySelector(`[data-lang="${targetLang}"].sdk-code`).classList.add('active');
        });
    });
    
    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn, .copy-btn-small');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            let textToCopy = '';
            const codeType = this.dataset.code;
            
            // Get text based on button type
            if (codeType === 'python') {
                textToCopy = `import asyncio
from microsandbox import PythonSandbox

async def main():
    async with PythonSandbox.create(name="demo") as sb:
        exec = await sb.run("name = 'World'")
        exec = await sb.run("print(f'Hello {name}!')")
    
    print(await exec.output()) # prints Hello World!

asyncio.run(main())`;
            } else if (codeType === 'javascript') {
                textToCopy = `import { NodeSandbox } from "microsandbox";

async function main() {
  const sb = await NodeSandbox.create({ name: "demo" });

  try {
    let exec = await sb.run("var name = 'World'");
    exec = await sb.run("console.log(\`Hello \${name}!\`)");

    console.log(await exec.output()); // prints Hello World!
  } finally {
    await sb.stop();
  }
}

main().catch(console.error);`;
            } else if (codeType === 'rust') {
                textToCopy = `use microsandbox::{SandboxOptions, PythonSandbox};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut sb = PythonSandbox::create(
        SandboxOptions::builder().name("demo").build()
    ).await?;

    let exec = sb.run(r#"name = "World""#).await?;
    let exec = sb.run(r#"print(f"Hello {name}!")"#).await?;

    println!("{}", exec.output().await?); // prints Hello World!

    sb.stop().await?;
    Ok(())
}`;
            } else if (codeType === 'install') {
                textToCopy = 'curl -sSL https://get.microsandbox.dev | sh';
            } else if (codeType === 'start') {
                textToCopy = 'msb server start --dev';
            } else if (codeType === 'sdk') {
                textToCopy = 'pip install microsandbox';
            } else {
                // For inline copy buttons, get the text from the previous code element
                const codeElement = this.previousElementSibling;
                textToCopy = codeElement.textContent;
            }
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback
                const originalText = this.innerHTML;
                this.innerHTML = this.classList.contains('copy-btn-small') ? '✅' : 'Copied!';
                this.style.background = '#28ca42';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
                
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Visual feedback
                const originalText = this.innerHTML;
                this.innerHTML = this.classList.contains('copy-btn-small') ? '✅' : 'Copied!';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .use-case-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // GitHub stats animation (mock data - replace with real API calls if needed)
    const animateStats = () => {
        const statElements = document.querySelectorAll('[data-stat]');
        
        statElements.forEach(element => {
            const statType = element.dataset.stat;
            let targetValue = 0;
            let suffix = '';
            
            switch(statType) {
                case 'stars':
                    targetValue = 2100;
                    suffix = '+';
                    break;
                case 'contributors':
                    targetValue = 50;
                    suffix = '+';
                    break;
                case 'downloads':
                    targetValue = 10;
                    suffix = 'k+';
                    break;
            }
            
            let currentValue = 0;
            const increment = targetValue / 50;
            const duration = 2000;
            const stepTime = duration / 50;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(counter);
                }
                
                const displayValue = statType === 'downloads' ? 
                    (currentValue / 1000).toFixed(1) : 
                    Math.floor(currentValue);
                
                element.textContent = displayValue + suffix;
            }, stepTime);
        });
    };
    
    // Trigger stats animation when section comes into view
    const statsSection = document.querySelector('.social-proof-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // Terminal typing animation
    const typingElements = document.querySelectorAll('.typing');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            element.textContent = text.slice(0, index);
            index++;
            
            if (index > text.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    index = 0;
                    element.textContent = '';
                    const restartInterval = setInterval(() => {
                        element.textContent = text.slice(0, index);
                        index++;
                        
                        if (index > text.length) {
                            clearInterval(restartInterval);
                        }
                    }, 100);
                }, 1000);
            }
        }, 100);
    });
    
    // Mobile menu toggle (basic implementation)
    const createMobileMenu = () => {
        const navbar = document.querySelector('.navbar .container');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.className = 'mobile-menu-btn';
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #1a1a1a;
                `;
                
                navbar.appendChild(mobileMenuBtn);
                
                mobileMenuBtn.addEventListener('click', () => {
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.right = '0';
                    navLinks.style.background = 'white';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.padding = '1rem';
                    navLinks.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                });
            }
        } else {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.remove();
                navLinks.style.cssText = '';
            }
        }
    };
    
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
