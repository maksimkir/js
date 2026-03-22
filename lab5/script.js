 // === ЗАВДАННЯ 1: ЛАМПОЧКА ===
        let idleTimeout; 
        function toggleLight() {
            const bulb = document.getElementById('bulb');
            const status = document.getElementById('bulb-status');
            const type = document.getElementById('bulb-select').value;
            
            bulb.classList.toggle('bulb-on');
            const isOn = bulb.classList.contains('bulb-on');
            status.innerText = isOn ? `Ввімкнено (${type})` : "Вимкнено"; 

            clearTimeout(idleTimeout);
            if (isOn) {
                // Автовимкнення через 10 сек для демонстрації (замість 5 хв) 
                idleTimeout = setTimeout(() => {
                    bulb.classList.remove('bulb-on');
                    status.innerText = "Вимкнено (таймер)";
                }, 5000); 
            }
        }

        function setBrightness() {
            const val = prompt("Введіть яскравість (0.1 - 1):", "1"); 
            if (val) document.getElementById('bulb').style.opacity = val;
        }

        // === ЗАВДАННЯ 2: СВІТЛОФОР ===
        let trafficState = 0; 
        const lights = ['red-light', 'yellow-light', 'green-light'];
        
        function updateTrafficUI(stateName) {
            lights.forEach(id => document.getElementById(id).classList.remove('active'));
            if (stateName !== 'none') {
                document.getElementById(`${stateName}-light`).classList.add('active');
                document.getElementById('traffic-desc').innerText = stateName.toUpperCase(); 
            }
        }

        async function startTraffic() {
            while(true) {
                updateTrafficUI('red'); await new Promise(r => setTimeout(r, 5000)); 
                
                // Жовтий мигає 3 рази 
                for(let i=0; i<3; i++) {
                    updateTrafficUI('yellow'); await new Promise(r => setTimeout(r, 500));
                    updateTrafficUI('none'); await new Promise(r => setTimeout(r, 500));
                }
                
                updateTrafficUI('green'); await new Promise(r => setTimeout(r, 7000));
            }
        }

        function manualSwitch() {
            trafficState = (trafficState + 1) % 3;
            const states = ['red', 'yellow', 'green'];
            updateTrafficUI(states[trafficState]); 
        }

        // === ЗАВДАННЯ 3: ЧАС ===
        setInterval(() => {
            const now = new Date(); 
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('clock').innerHTML = `${h}:${m}:<span class="blink">${s}</span>`;
            
            // Таймер зворотного відліку 
            const target = document.getElementById('timer-input').value;
            if (target) {
                const diff = new Date(target) - now;
                if (diff > 0) {
                    document.getElementById('timer-display').innerText = `Залишилось: ${Math.floor(diff/1000)} сек`;
                } else {
                    document.getElementById('timer-display').innerText = "Час вийшов!";
                }
            }
        }, 1000);

        function calcBday() {
            const bday = new Date(document.getElementById('bday-input').value);
            const now = new Date();
            bday.setFullYear(now.getFullYear());
            if (bday < now) bday.setFullYear(now.getFullYear() + 1);
            
            const diff = bday - now; 
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            document.getElementById('bday-result').innerText = `До дня народження: ${days} днів`;
        }

        // === ЗАВДАННЯ 4: МАГАЗИН ===
        const catalog = new Map(); 
        const orderHistory = new WeakMap();

       //+
        function uiAddProduct() {
            const name = document.getElementById('prod-name').value;
            const price = document.getElementById('prod-price').value;
            const stock = document.getElementById('prod-stock').value;
            const id = Date.now();

            if (name) {
                catalog.set(id, { name, price, stock: Number(stock) });
                renderCatalog();
            }
        }

        function renderCatalog() {
            const list = document.getElementById('catalog-list');
            list.innerHTML = '';
            catalog.forEach((item, id) => {
                list.innerHTML += `<div>${item.name} - ${item.price}грн (Залишок: ${item.stock}) 
                <button onclick="buyProduct(${id})">Купити </button></div>`;
            });
        }

        function buyProduct(id) {
            const item = catalog.get(id);
            if (item && item.stock > 0) {
                item.stock--;   
                renderCatalog();
            }
        }