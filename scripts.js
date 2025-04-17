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