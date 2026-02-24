// --- ملف قاعدة بيانات المشاريع ---
const allProjects = [
    // أمثلة الفيديوهات الطولية (الشورتس والإعلانات)
    { categories: ['ads', 'shorts'], type: 'vertical', content: '<iframe src="https://drive.google.com/file/d/1diz-gIW1DpychCZ5rDRfmszuDH55XnOn/preview" loading="lazy" allowfullscreen></iframe>' },
    { categories: ['education', 'ads', 'shorts'], type: 'vertical', content: '<iframe src="https://drive.google.com/file/d/1tVlDVDe3mjkvY2PudVk6M4xdakan1MP_/preview" loading="lazy" allowfullscreen></iframe>' },
    
    // أمثلة يوتيوب العادية (بالعرض)
    { categories: ['youtube'], type: 'horizontal', content: '<iframe src="https://drive.google.com/file/d/1JD1-oYFM7DmVFrpYOz2enwQYj6b7dhW5/preview" loading="lazy" allowfullscreen></iframe>' },
    { categories: ['youtube'], type: 'horizontal', content: '<iframe src="https://www.youtube.com/embed/e8XCS6M8CbE" loading="lazy" allowfullscreen></iframe>' },
    
    // أمثلة كروت الفيسبوك (مشاريع التخرج)
    { categories: ['graduation', 'shorts'], type: 'vertical fb-card', content: '<div class="fb-content"><i class="fab fa-facebook" style="font-size: 3rem; color: #1877F2;"></i><h4>مشروع تخرج (طولي)</h4><a href="https://web.facebook.com/share/v/17r6CqgAqh/" target="_blank" class="fb-btn">شاهد على فيسبوك</a></div>' },
    { categories: ['graduation', 'podcast'], type: 'horizontal fb-card', content: '<div class="fb-content"><i class="fab fa-facebook" style="font-size: 3rem; color: #1877F2;"></i><h4>بودكاست</h4><a href="https://web.facebook.com/share/v/1C8KMcShyy/" target="_blank" class="fb-btn">شاهد على فيسبوك</a></div>' }
    
    // ضيف باقي لينكاتك هنا بنفس الطريقة...
];