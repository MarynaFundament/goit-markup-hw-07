    const buttons = document.querySelectorAll('.button-portfolio');
    const galleryItems = document.querySelectorAll('.list-item');

        const handleFilter = (filterValue) => {
    
        // Add 'active' class to the clicked button
       buttons.forEach(btn => {
            if (btn.textContent.toLowerCase() === filterValue) {
                btn.classList.add('active');
            }
        });

        // Filter gallery items based on the button clicked
        galleryItems.forEach(item => {
            const itemCategory = item.querySelector('.gallery-paragraph').textContent.toLowerCase();
            
            if (filterValue === 'усі' || itemCategory.includes(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    };

    // Attach the click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.textContent.toLowerCase();
            handleFilter(filterValue);
        });
    });

