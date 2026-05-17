const destinations = [
    {
        id: 'daranak',
        name: 'Daranak Falls',
        city: 'Tanay',
        category: 'Waterfall',
        image: 'Images/Waterfalls/daranak.jpg',
        shortDescription: 'A popular family-friendly cascade with clear pools and picnic areas.',
        fullDescription: 'Daranak Falls is one of Rizal’s most beloved outdoor destinations. The easy trail, scenic river pools, and bamboo cottages make it perfect for families and day trips.',
        location: 'Barangay Sampaloc, Tanay, Rizal',
        activities: ['Swimming', 'Picnics', 'Nature photography'],
        bestTime: 'November to May',
        entranceFee: '₱50 per person',
        hours: '7:00 AM – 5:00 PM',
        facebookPage: 'https://www.facebook.com/DaranakFallsRizal',
        travelTips: ['Arrive early on weekends', 'Use biodegradable sunscreen', 'Bring water and a towel']
    },
    {
        id: 'masungi',
        name: 'Masungi Georeserve',
        city: 'Baras',
        category: 'Adventure',
        image: 'Images/Nature/sipit.jpg',
        shortDescription: 'A conservation adventure park with hanging bridges, trails, and limestone formations.',
        fullDescription: 'Masungi Georeserve blends environmental protection with thrilling exploration. Walk through a living museum of karst outcrops, suspension bridges, and forest viewpoints.',
        location: 'Sitio Kalupang, Brgy. San Luis, Baras, Rizal',
        activities: ['Hiking', 'Canopy walk', 'Guided eco tours'],
        bestTime: 'December to April',
        entranceFee: '₱150 per person (guide required)',
        hours: '8:00 AM – 5:00 PM',
        facebookPage: 'https://www.facebook.com/MasungiGeoreserve',
        travelTips: ['Book a tour in advance', 'Wear closed shoes', 'Bring light rain gear']
    },
    {
        id: 'talim',
        name: 'Talim Island Waterfront',
        city: 'Binangonan',
        category: 'Beach',
        image: 'Images/Index/talim.jpg',
        shortDescription: 'A calm lakeshore escape with sandy shores along Laguna de Bay.',
        fullDescription: 'Talim Island Waterfront offers a beach-like lakeside destination inside Laguna de Bay, featuring fishing villages, sunset picnic spots, and gentle waters ideal for relaxation.',
        location: 'Talim Island, Binangonan, Rizal',
        activities: ['Sunset viewing', 'Lakeside strolling', 'Local food sampling'],
        bestTime: 'November to March',
        entranceFee: 'No entrance fee',
        hours: '24 hours',
        facebookPage: 'https://www.facebook.com/TalimIslandWaterfront',
        travelTips: ['Bring cash for tricycle rides', 'Pack sun protection', 'Try fresh lake fish dishes']
    },
    {
        id: 'talim-island',
        name: 'Talim Island Village',
        city: 'Binangonan',
        category: 'Island',
        image: 'Images/Index/local.jpg',
        shortDescription: 'A charming island village with lakeside markets, local boats, and island culture.',
        fullDescription: 'Talim Island Village is a welcoming community on Laguna de Bay where travelers can explore lakeside trails, mingle with locals, and discover island traditions away from the city.',
        location: 'Talim Island, Binangonan, Rizal',
        activities: ['Village tours', 'Boat rides', 'Pasalubong shopping'],
        bestTime: 'November to March',
        entranceFee: 'No entrance fee',
        hours: '24 hours',
        facebookPage: 'https://www.facebook.com/TalimIslandVillage',
        travelTips: ['Bring an umbrella for shade', 'Mind the boat schedules', 'Buy fresh local snacks']
    },
    {
        id: 'pamitinan',
        name: 'Mount Pamitinan',
        city: 'Rodriguez',
        category: 'Mountain',
        image: 'Images/Nature/pamitinan.jpg',
        shortDescription: 'A breezy summit hike leading to forest views, caves, and a historic cross.',
        fullDescription: 'Mount Pamitinan is a classic Rizal trail with limestone cliffs, historic caves, and breathtaking ridge panoramas. The climb is satisfying for beginners and experienced hikers alike.',
        location: 'Sitio Wawa, Brgy. San Jose, Rodriguez, Rizal',
        activities: ['Hiking', 'Caving', 'Camping'],
        bestTime: 'November to March',
        entranceFee: '₱50 per person',
        hours: '5:00 AM – 6:00 PM',
        facebookPage: 'https://www.facebook.com/MountPamitinan',
        travelTips: ['Bring a headlamp for caves', 'Keep hydrated', 'Wear sturdy hiking shoes']
    },
    {
        id: 'angono',
        name: 'Angono Art Center',
        city: 'Angono',
        category: 'Historical Site',
        image: 'Images/Art/tiamson.jpg',
        shortDescription: 'A cultural landmark celebrating the art capital of the Philippines.',
        fullDescription: 'Angono Art Center showcases the creativity of Rizal’s artists through galleries, murals, and museum exhibits. It is the perfect stop to learn about local visual arts history.',
        location: 'Bonifacio Avenue, Angono, Rizal',
        activities: ['Gallery tours', 'Street mural viewing', 'Souvenir shopping'],
        bestTime: 'All year round',
        entranceFee: '₱80 per person',
        hours: '9:00 AM – 6:00 PM',
        facebookPage: 'https://www.facebook.com/AngonoArtCenter',
        travelTips: ['Visit during the art festival month', 'Bring a camera', 'Talk to local artists']
    },
    {
        id: 'hinulugang',
        name: 'Hinulugang Taktak',
        city: 'Antipolo',
        category: 'Waterfall',
        image: 'Images/Waterfalls/taktak.jpg',
        shortDescription: 'A historic urban waterfall with scenic picnic areas and cultural significance.',
        fullDescription: 'Hinulugang Taktak is one of Rizal’s most historic waterfalls, located near downtown Antipolo. The park blends nature, history, and local pilgrimage tradition.',
        location: 'Sitio Kinabuan, Antipolo City, Rizal',
        activities: ['Picnicking', 'Light hiking', 'Heritage touring'],
        bestTime: 'November to May',
        entranceFee: '₱20 per person',
        hours: '7:00 AM – 5:00 PM',
        facebookPage: 'https://www.facebook.com/HinulugangTaktak',
        travelTips: ['Bring a jacket for cooler evenings', 'Visit early on weekends', 'Respect local worship activities']
    },
    {
        id: 'bote',
        name: 'Antipolo Food Street',
        city: 'Antipolo',
        category: 'Food Destination',
        image: 'Images/Index/gastronomy.jpg',
        shortDescription: 'A lively Antipolo food street showcasing local delicacies and café culture.',
        fullDescription: 'Antipolo Food Street highlights the city’s growing café and street food scene, from rice cakes and grilled specialties to modern coffee spots and local snacks.',
        location: 'Antipolo City, Rizal',
        activities: ['Food tasting', 'Coffee pairing', 'Pasalubong shopping'],
        bestTime: 'All year round',
        entranceFee: 'No entrance fee',
        hours: '9:00 AM – 10:00 PM',
        facebookPage: '',
        travelTips: ['Try suman, kasoy, and minaluto', 'Share plates to taste more', 'Bring extra cash']
    },
    {
        id: 'tinipak',
        name: 'Tinipak River',
        city: 'Tanay',
        category: 'Adventure',
        image: 'Images/Waterfalls/tinipak.jpg',
        shortDescription: 'A scenic river adventure with towering limestone walls and crystal waters.',
        fullDescription: 'Tinipak River is a beautiful natural destination with dramatic cliffs, freshwater pools, and a calm river path. It is ideal for a quiet adventure amid stunning scenery.',
        location: 'Sitio Tinipak, Daraitan, Tanay, Rizal',
        activities: ['Wading', 'Photography', 'Camping'],
        bestTime: 'December to May',
        entranceFee: '₱100 per person',
        hours: '7:00 AM – 5:00 PM',
        facebookPage: 'https://www.facebook.com/TinipakRiver',
        travelTips: ['Wear water shoes', 'Bring a waterproof bag', 'Respect the river environment']
    },
    {
        id: 'laguna-resort',
        name: 'Laguna de Bay Beachfront Resort',
        city: 'Binangonan',
        category: 'Beach',
        image: 'Images/Index/laguna.jpg',
        shortDescription: 'A beachside resort on the Laguna de Bay shoreline with pool and lake-front terraces.',
        fullDescription: 'Laguna de Bay Beachfront Resort is a lakeside getaway offering beachfront relaxation, poolside dining, and smooth access to Laguna de Bay for sunset strolls and boat trips.',
        location: 'Laguna de Bay Shoreline, Binangonan, Rizal',
        activities: ['Pool lounging', 'Sunset viewing', 'Boat rides'],
        bestTime: 'November to March',
        entranceFee: 'No entrance fee',
        hours: '6:00 AM – 6:00 PM',
        facebookPage: 'https://www.facebook.com/PuntaBeachResort',
        travelTips: ['Reserve a lakeside cabana', 'Bring swimwear and sunblock', 'Enjoy an evening lakeside dinner']
    },
    {
        id: 'binacayan-trail',
        name: 'Binacayan Trail',
        city: 'Tanay',
        category: 'Mountain',
        image: 'Images/Nature/binacayan.jpg',
        shortDescription: 'A scenic mountain trail with overlooks of the Sierra Madre foothills.',
        fullDescription: 'Binacayan Trail is a lesser-known mountain route in Tanay that rewards hikers with sweeping ridge views, cool forest air, and a peaceful outdoor atmosphere.',
        location: 'Binacayan, Tanay, Rizal',
        activities: ['Hiking', 'Nature photography', 'Bird watching'],
        bestTime: 'November to April',
        entranceFee: '₱30 per person',
        hours: '5:00 AM – 5:00 PM',
        facebookPage: 'https://www.facebook.com/BinacayanTrail',
        travelTips: ['Bring hiking shoes', 'Carry snacks and water', 'Follow trail markers']
    },
    {
        id: 'pililla-island',
        name: 'Pililla Island',
        city: 'Pililla',
        category: 'Island',
        image: 'Images/Photography/pililla.jpg',
        shortDescription: 'A calm island in Laguna de Bay with local boat access and lakeside views.',
        fullDescription: 'Pililla Island is a natural island in Laguna de Bay that offers rustic lakeside charm, boat access from the mainland, and a quiet escape for visitors seeking a simple island experience.',
        location: 'Laguna de Bay, Pililla, Rizal',
        activities: ['Boat riding', 'Island strolling', 'Photography'],
        bestTime: 'November to March',
        entranceFee: 'No entrance fee',
        hours: '6:00 AM – 6:00 PM',
        facebookPage: '',
        travelTips: ['Arrange a boat ride in advance', 'Bring sun protection', 'Respect island communities']
    }
];

const categories = ['All', 'Beach', 'Mountain', 'Waterfall', 'Historical Site', 'Island', 'Food Destination', 'Adventure'];

function renderDestinationCards(filter = 'All', query = '') {
    const container = document.querySelector('#destinationCardsContainer');
    if (!container) return;
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = destinations.filter(dest => {
        const matchesCategory = filter === 'All' || dest.category === filter;
        const matchQuery = normalizedQuery === '' || [dest.name, dest.city, dest.category].some(field => field.toLowerCase().includes(normalizedQuery));
        return matchesCategory && matchQuery;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-warning">No destinations found. Try another keyword or category.</div></div>';
        return;
    }

    container.innerHTML = filtered.map(dest => `
        <div class="col-12 col-md-6 col-xl-4">
            <div class="food-card h-100">
                <img src="${dest.image}" alt="${dest.name}" class="w-100">
                <div class="card-text">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge">${dest.category}</span>
                        <span class="badge"><i class="fas fa-map-marker-alt"></i> ${dest.city}</span>
                    </div>
                    <h3>${dest.name}</h3>
                    <p>${dest.shortDescription}</p>
                    <div class="d-flex flex-wrap gap-2 mt-3">
                        <span class="badge">Fee: ${dest.entranceFee}</span>
                        <span class="badge">Hours: ${dest.hours}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <a href="${dest.id}.html" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupDestinationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            const searchInput = document.querySelector('#destinationSearch');
            const query = searchInput ? searchInput.value : '';
            renderDestinationCards(category, query);
        });
    });
}

function setupSearchInput() {
    const searchInput = document.querySelector('#destinationSearch');
    if (!searchInput) return;
    searchInput.addEventListener('input', () => {
        const activeFilter = document.querySelector('.filter-btn.active');
        const category = activeFilter ? activeFilter.dataset.category : 'All';
        renderDestinationCards(category, searchInput.value);
    });
}

function populateDestinationSelect() {
    const select = document.querySelector('#selectedDestination');
    if (!select) return;
    select.innerHTML = '<option value="">Choose a destination</option>' + destinations.map(dest => `<option value="${dest.name}">${dest.name} — ${dest.city}</option>`).join('');
}

function setFormError(element, message) {
    if (!element) return;
    element.classList.add('is-invalid');
    const feedback = element.parentElement.querySelector('.invalid-feedback');
    if (feedback) feedback.textContent = message;
}

function clearFormError(element) {
    if (!element) return;
    element.classList.remove('is-invalid');
}

function validateInquiryForm(event) {
    const form = document.querySelector('#inquiryForm');
    if (!form) return;
    let valid = true;
    const fullName = document.querySelector('#fullName');
    const email = document.querySelector('#emailAddress');
    const contact = document.querySelector('#contactNumber');
    const destination = document.querySelector('#selectedDestination');
    const travelDate = document.querySelector('#travelDate');
    const visitors = document.querySelector('#visitorCount');
    const message = document.querySelector('#message');

    [fullName, email, contact, destination, travelDate, visitors, message].forEach(clearFormError);

    if (!fullName.value.trim()) {
        setFormError(fullName, 'Full name is required.');
        valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        setFormError(email, 'Please enter a valid email address.');
        valid = false;
    }
    if (!/^[0-9]+$/.test(contact.value.trim())) {
        setFormError(contact, 'Contact number must contain numbers only.');
        valid = false;
    }
    if (!destination.value) {
        setFormError(destination, 'Please select a destination.');
        valid = false;
    }
    if (!travelDate.value) {
        setFormError(travelDate, 'Travel date is required.');
        valid = false;
    }
    if (!visitors.value || Number(visitors.value) < 1) {
        setFormError(visitors, 'Number of visitors must be at least 1.');
        valid = false;
    }
    if (!message.value.trim()) {
        setFormError(message, 'Message is required.');
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        return;
    }

    event.preventDefault();
    form.reset();
    alert('Inquiry submitted successfully! We will contact you soon.');
}

function setupInquiryForm() {
    const form = document.querySelector('#inquiryForm');
    if (!form) return;
    form.addEventListener('submit', validateInquiryForm);
}

function setupGalleryLightbox() {
    const items = Array.from(document.querySelectorAll('.gallery-item')); 
    if (items.length === 0) return;
    const lightbox = document.querySelector('#galleryLightbox');
    const lightboxImage = document.querySelector('#lightboxImage');
    const lightboxCaption = document.querySelector('#lightboxCaption');
    const closeButton = document.querySelector('#lightboxClose');
    const prevButton = document.querySelector('#lightboxPrev');
    const nextButton = document.querySelector('#lightboxNext');
    let activeIndex = 0;

    function showLightbox(index) {
        const item = items[index];
        if (!item) return;
        const img = item.querySelector('img');
        const caption = img.dataset.caption || img.alt || '';
        if (lightboxImage) {
            lightboxImage.src = img.src;
            lightboxImage.alt = caption;
        }
        if (lightboxCaption) lightboxCaption.textContent = caption;
        activeIndex = index;
        lightbox.classList.add('visible');
    }

    function hideLightbox() {
        lightbox.classList.remove('visible');
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => showLightbox(index));
    });
    closeButton?.addEventListener('click', hideLightbox);
    lightbox?.addEventListener('click', event => {
        if (event.target === lightbox) hideLightbox();
    });
    prevButton?.addEventListener('click', event => {
        event.stopPropagation();
        showLightbox((activeIndex - 1 + items.length) % items.length);
    });
    nextButton?.addEventListener('click', event => {
        event.stopPropagation();
        showLightbox((activeIndex + 1) % items.length);
    });
    document.addEventListener('keydown', event => {
        if (!lightbox.classList.contains('visible')) return;
        if (event.key === 'Escape') hideLightbox();
        if (event.key === 'ArrowLeft') showLightbox((activeIndex - 1 + items.length) % items.length);
        if (event.key === 'ArrowRight') showLightbox((activeIndex + 1) % items.length);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupDestinationFilters();
    setupSearchInput();
    renderDestinationCards();
    populateDestinationSelect();
    setupInquiryForm();
    setupGalleryLightbox();
});
