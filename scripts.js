                function updateClock() {
                        const now = new Date();
                        const hours = now.getHours().toString().padStart(2, '0');
                        const minutes = now.getMinutes().toString().padStart(2, '0');
                        const seconds = now.getSeconds().toString().padStart(2, '0');

                        // Date formatting
                        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
                        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                                                    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

                        document.querySelector('.hours').textContent = hours;
                        document.querySelector('.minutes').textContent = minutes;
                        document.querySelector('.seconds').textContent = seconds;
                        document.querySelector('.day').textContent = days[now.getDay()];
                        document.querySelector('.date').textContent =
                                `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
                        document.querySelector('.timezone').textContent =
                                'UTC' + (now.getTimezoneOffset()/-60).toFixed(0).padStart(2, '0');
                }

                // Initial update and set interval
                updateClock();
                setInterval(updateClock, 1000);

                // Add particle effect
                document.addEventListener('DOMContentLoaded', () => {
                        const container = document.querySelector('.cyber-container');
                        for(let i = 0; i < 50; i++) {
                                const particle = document.createElement('div');
                                particle.className = 'cyber-line';
                                particle.style.cssText = `
                                        width: ${Math.random() * 3}px;
                                        height: ${Math.random() * 20}px;
                                        left: ${Math.random() * 100}%;
                                        top: ${Math.random() * 100}%;
                                        animation: float ${5 + Math.random() * 10}s infinite;
                                        opacity: ${0.2 + Math.random() * 0.5};
                                `;
                                container.appendChild(particle);
                        }
                });

                // Add hover effect
                document.querySelectorAll('.time-segment').forEach(segment => {
                        segment.addEventListener('mouseover', () => {
                                segment.style.transform = 'scale(1.1) rotateZ(5deg)';
                        });

                        segment.addEventListener('mouseout', () => {
                                segment.style.transform = 'scale(1) rotateZ(0)';
                        });
                });