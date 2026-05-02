<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>The Resonant Archive | CLIR Home</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&amp;family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline-variant": "#debfc3",
                        "error-container": "#ffdad6",
                        "surface-dim": "#dbdad5",
                        "on-tertiary-fixed": "#00210d",
                        "outline": "#8b7074",
                        "tertiary-fixed": "#a4f5b7",
                        "surface-variant": "#e4e2dd",
                        "secondary-fixed-dim": "#c8c6c5",
                        "secondary-fixed": "#e5e2e1",
                        "surface-container-highest": "#e4e2dd",
                        "inverse-on-surface": "#f2f1ec",
                        "surface-tint": "#ad2c53",
                        "tertiary-container": "#005e2f",
                        "on-primary-container": "#ffadbc",
                        "on-primary-fixed": "#3f0016",
                        "secondary": "#5f5e5e",
                        "on-error-container": "#93000a",
                        "primary-container": "#9a1c46",
                        "on-primary-fixed-variant": "#8c0e3c",
                        "surface-container-high": "#eae8e3",
                        "surface-bright": "#fbf9f4",
                        "on-tertiary": "#ffffff",
                        "inverse-primary": "#ffb1c0",
                        "background": "#fbf9f4",
                        "primary-fixed-dim": "#ffb1c0",
                        "on-surface": "#1b1c19",
                        "primary-fixed": "#ffd9df",
                        "secondary-container": "#e2dfde",
                        "surface": "#fbf9f4",
                        "on-secondary-container": "#636262",
                        "primary": "#780030",
                        "surface-container": "#f0eee9",
                        "inverse-surface": "#30312e",
                        "tertiary": "#004420",
                        "on-primary": "#ffffff",
                        "on-secondary-fixed-variant": "#474746",
                        "on-tertiary-container": "#86d59a",
                        "on-background": "#1b1c19",
                        "on-error": "#ffffff",
                        "on-secondary-fixed": "#1c1b1b",
                        "on-tertiary-fixed-variant": "#005228",
                        "on-surface-variant": "#574145",
                        "error": "#ba1a1a",
                        "surface-container-low": "#f5f3ee",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary": "#ffffff",
                        "tertiary-fixed-dim": "#88d89c",
                        "clir-paper": "#F9F7F2",
                        "clir-onyx": "#1A1A1A"
                    },
                    "borderRadius": {
                        "DEFAULT": "0px",
                        "lg": "0px",
                        "xl": "0px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "stack-md": "32px",
                        "unit": "8px",
                        "stack-lg": "64px",
                        "gutter": "24px",
                        "margin-page": "64px",
                        "container-max": "1280px",
                        "stack-sm": "16px"
                    },
                    "fontFamily": {
                        "body-lg": ["Inter"],
                        "label-caps": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-lg": ["Newsreader"],
                        "display-lg": ["Newsreader"],
                        "headline-md": ["Newsreader"],
                        "mono": ["JetBrains Mono"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-caps": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "headline-md": ["32px", {"lineHeight": "1.3", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-callout {
            border-left: 4px solid;
        }
        .mosaic-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-auto-rows: minmax(300px, auto);
        }
    </style>
</head>
<body class="bg-clir-paper text-clir-onyx font-body-md selection:bg-primary-container selection:text-white">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#FDFCFB] dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 transition-all duration-300">
<div class="max-w-[1280px] mx-auto px-8 flex justify-between items-center h-20 w-full">
<div class="text-2xl font-black tracking-tighter text-stone-900 dark:text-stone-50">CLIR</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-stone-600 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-[#9A1C46] dark:hover:text-[#E84A7D] transition-colors duration-200" href="#">Grants</a>
<a class="text-stone-600 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-[#9A1C46] dark:hover:text-[#E84A7D] transition-colors duration-200" href="#">Research</a>
<a class="text-stone-600 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-[#9A1C46] dark:hover:text-[#E84A7D] transition-colors duration-200" href="#">Events</a>
<a class="text-stone-600 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-[#9A1C46] dark:hover:text-[#E84A7D] transition-colors duration-200" href="#">Community</a>
<a class="text-stone-600 dark:text-stone-400 font-medium font-serif text-lg tracking-tight hover:text-[#9A1C46] dark:hover:text-[#E84A7D] transition-colors duration-200" href="#">Editorial</a>
</div>
<div class="flex items-center space-x-6">
<div class="flex items-center text-stone-400">
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">search</span>
</div>
<button class="bg-clir-onyx text-clir-paper px-6 py-2 text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</div>
</nav>
<!-- Hero Section -->
<section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-stone-200">
<div class="max-w-[1280px] mx-auto px-8 relative z-10">
<div class="flex flex-col items-center text-center space-y-unit">
<span class="font-label-caps text-label-caps text-primary uppercase tracking-[0.3em] mb-4">The Resonant Archive</span>
<h1 class="font-display-lg text-display-lg max-w-4xl text-clir-onyx italic leading-[1.05]">
                    Advancing scholarship by preserving the past and engineering the future.
                </h1>
<p class="font-body-lg text-body-lg max-w-2xl text-secondary mt-stack-md">
                    CLIR is an independent, nonprofit organization that forges strategies to enhance research, teaching, and learning environments in collaboration with libraries, archives, museums, and communities.
                </p>
<div class="mt-stack-lg flex space-x-4">
<button class="bg-clir-onyx text-clir-paper px-10 py-4 text-label-caps uppercase tracking-[0.2em] hover:bg-primary transition-colors">Explore Projects</button>
<button class="border border-clir-onyx px-10 py-4 text-label-caps uppercase tracking-[0.2em] hover:bg-clir-onyx hover:text-clir-paper transition-all">Support Our Work</button>
</div>
</div>
</div>
<!-- Decorative subtle pattern -->
<div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#1A1A1A 1px, transparent 1px); background-size: 40px 40px;"></div>
</section>
<!-- The Mosaic Grid -->
<section class="max-w-[1280px] mx-auto px-8 py-stack-lg">
<div class="flex items-baseline justify-between mb-stack-md border-b border-clir-onyx pb-2">
<h2 class="font-headline-md text-headline-md uppercase tracking-tight">The Mosaic</h2>
<span class="font-label-caps text-label-caps">05 CONTENT MODES</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-px bg-stone-200 border border-stone-200">
<!-- Grants: Blueprint Blue -->
<div class="md:col-span-8 bg-white p-12 group cursor-pointer hover:bg-blue-50 transition-colors duration-500">
<div class="flex flex-col h-full justify-between">
<div>
<span class="font-mono text-xs uppercase tracking-widest text-blue-600 mb-8 block">/ 01_FUNDING_VEHICLES</span>
<h3 class="font-headline-lg text-headline-lg text-blue-900 group-hover:translate-x-2 transition-transform duration-500">Grants</h3>
<p class="font-body-lg text-body-lg text-stone-600 mt-6 max-w-md font-mono text-sm">Providing essential resources for the preservation of hidden collections and the digital humanities infrastructure.</p>
</div>
<div class="mt-12 flex items-center text-blue-600 font-mono text-xs uppercase font-bold tracking-widest">
                        View Active Opportunities <span class="material-symbols-outlined ml-2">arrow_forward</span>
</div>
</div>
</div>
<!-- Research: Wide Margins -->
<div class="md:col-span-4 bg-[#fcfbf7] p-12 group border-l border-stone-200 hover:bg-stone-100 transition-colors">
<div class="flex flex-col h-full">
<span class="font-label-caps text-label-caps text-stone-400 mb-8 block">/ 02 RESEARCH</span>
<div class="pl-8 border-l border-stone-300">
<h3 class="font-headline-md text-headline-md italic group-hover:text-primary transition-colors">Digital Evolution Studies</h3>
<p class="font-body-md text-body-md text-stone-600 mt-4 leading-relaxed">Systematic analysis of the shifting landscape of cultural heritage in the digital age.</p>
</div>
</div>
</div>
<!-- Events: Terracotta -->
<div class="md:col-span-4 bg-white p-12 group border-t border-stone-200 hover:bg-orange-50 transition-colors">
<div class="flex flex-col">
<span class="font-label-caps text-label-caps text-orange-700 mb-8 block">/ 03 ASSEMBLIES</span>
<h3 class="font-headline-md text-headline-md text-orange-950">Events &amp; Symposia</h3>
<div class="mt-8">
<img alt="Professional gathering" class="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="A sophisticated, high-contrast photograph of a minimalist academic conference hall. The scene is captured in soft, directional lighting that emphasizes the architectural lines of the room. Scholars are seen in silhouette against a bright, large-scale digital projection. The color palette is warm terracotta and deep onyx, creating an atmosphere of intellectual prestige and modern collaboration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQx243YLfxTv4S0fG3CB_jd2bcR35UfNsBemJc0RVIZMn2oh6VKQJ0b24fpryYqUovomyxUEYjHmf6iS0gC2iwkDRNnGSd-gd4bBJSnrUWaILwtPjSOGR3THaEZdoOakeQhP0nXwKA40tGYrfgHZVd7lYVVvSNj8h5mrMNa7ePDthjumbDgC9uTX-c37cBAqt0axoGjNTqiNkTKkwOd---jYnwqlAt3qu0-GkyukArrNp11F8Kl-Bm8ph-g2VZZtgp0p4WoYesvn0"/>
</div>
</div>
</div>
<!-- Community: Ochre -->
<div class="md:col-span-4 bg-[#fdfaf3] p-12 group border-t border-l border-stone-200 hover:bg-amber-50 transition-colors">
<div class="flex flex-col justify-between h-full">
<div>
<span class="font-label-caps text-label-caps text-amber-700 mb-8 block">/ 04 NETWORKS</span>
<h3 class="font-headline-md text-headline-md text-amber-950">Community</h3>
<p class="font-body-md text-body-md text-stone-600 mt-4">Connecting a global network of archivists, librarians, and digital preservationists.</p>
</div>
<div class="flex -space-x-2 mt-8">
<div class="w-10 h-10 rounded-full border-2 border-white bg-stone-300"></div>
<div class="w-10 h-10 rounded-full border-2 border-white bg-stone-400"></div>
<div class="w-10 h-10 rounded-full border-2 border-white bg-stone-500"></div>
</div>
</div>
</div>
<!-- Editorial: Deep Violet -->
<div class="md:col-span-4 bg-stone-900 p-12 group border-t border-l border-stone-200 hover:bg-stone-800 transition-colors">
<div class="flex flex-col text-white">
<span class="font-label-caps text-label-caps text-stone-400 mb-8 block">/ 05 PUBLICATIONS</span>
<h3 class="font-headline-md text-headline-md italic text-primary-container">Editorial</h3>
<p class="font-body-md text-body-md text-stone-400 mt-4">Provocative essays and thought leadership from the vanguard of library science.</p>
<span class="material-symbols-outlined mt-12 text-4xl font-light">menu_book</span>
</div>
</div>
</div>
</section>
<!-- Impact Section -->
<section class="bg-clir-onyx text-clir-paper py-stack-lg border-y border-stone-800">
<div class="max-w-[1280px] mx-auto px-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
<div class="space-y-stack-md">
<h2 class="font-headline-lg text-headline-lg leading-tight">Quantifying Preservation. Sustaining Knowledge.</h2>
<p class="font-body-lg text-body-lg text-stone-400 max-w-lg">
                        For over sixty years, CLIR has functioned as a neutral convener, a strategic analyst, and a catalyst for change in the information landscape.
                    </p>
<div class="grid grid-cols-2 gap-8 pt-8">
<div class="border-t border-stone-700 pt-4">
<span class="font-display-lg text-[48px] block leading-none">600+</span>
<span class="font-label-caps text-label-caps text-stone-500 uppercase">Institutions Served</span>
</div>
<div class="border-t border-stone-700 pt-4">
<span class="font-display-lg text-[48px] block leading-none">$34M</span>
<span class="font-label-caps text-label-caps text-stone-500 uppercase">In Grant Awards</span>
</div>
</div>
</div>
<div class="relative aspect-square md:aspect-video bg-stone-800 flex items-center justify-center">
<img alt="Historic Library" class="w-full h-full object-cover opacity-50 grayscale" data-alt="A grand, historic library interior with tall wooden shelves filled with leather-bound books, captured in a cinematic, low-angle perspective. The lighting is moody and atmospheric, with golden dust motes dancing in shafts of soft light. The aesthetic is one of timeless knowledge and high-contrast editorial photography, utilizing the Deep Onyx and Paper palette to emphasize the permanence of the archive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm-G4sCmFC6wWMLaFR92WudcP3I2HfSLNWGHyHRyn2o5YAvb4OHjv8wlSa2o2Xm5Akit_DJzGTE3BvQ_UXfN1J2KI2BLSGpA1WbuFbEsEoHbPI7B-VmJM5aIPSXyCUy3tQXq49R5dr-pq5tSaqzc-7lY_hwFNKTZqyfIRzjmcd_9hkHv-TFE0AdWUoEKSejcFtBMsVQvI52D2Fd2LSHVF6Bw6p5RSL0FmUwU_tov_jDGTJ9P-kCw7z4z8Wo4_V4ineFbeoCe6pwc"/>
<div class="absolute inset-0 bg-gradient-to-t from-clir-onyx to-transparent opacity-60"></div>
</div>
</div>
</div>
</section>
<!-- News & Thought Leadership -->
<section class="max-w-[1280px] mx-auto px-8 py-stack-lg">
<div class="flex items-center justify-between mb-12">
<div class="space-y-1">
<span class="font-label-caps text-label-caps text-primary uppercase">From the Editorial Desk</span>
<h2 class="font-headline-lg text-headline-lg">Latest Perspectives</h2>
</div>
<a class="font-label-caps text-label-caps border-b border-clir-onyx pb-1 hover:text-primary hover:border-primary transition-colors" href="#">Read All Essays</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<!-- Article 1 -->
<article class="group">
<div class="mb-6 overflow-hidden aspect-[4/5] bg-stone-100 border border-stone-200">
<img alt="Reading room" class="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" data-alt="A minimalist, top-down photograph of a stark white desk with a single, thick, open academic journal and a vintage fountain pen. The lighting is high-key and pristine, emphasizing a modern 'Paper' aesthetic. A small splash of deep violet color from a bookmark provides a semantic signal for Editorial content. The overall mood is quiet, focused, and intellectually rigorous." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyAHFOD2Culeg9smDXa9QUBD_RUOadfxRKRfn3QwcLIF8yHQ_aBAZt5inks9gJXYXHKbfbY3MoEJ7jJ_g33y1q6MZQiQhB8p9Mq3wgHGb400g-bfAN91Pz2RZAQ9y7Kg77vJO-Pr4wzOFOSDFZxsGstslS4n7TxA187YQeZ0maOx3UnEn90874RM9CYMq5HysYPhHMhTstRQrnf_pxUY7RCPV1_uIWakyz7RHO5erBMKiz2-JqE0LpwQfF2cxaec1jZpKGAdSntv0"/>
</div>
<div class="editorial-callout border-primary pl-6">
<span class="font-label-caps text-label-caps text-stone-500">MAY 2024 / TECHNOLOGY</span>
<h3 class="font-headline-md text-headline-md mt-2 group-hover:italic transition-all duration-300">The Permanence of the Digital ephemeral</h3>
<p class="font-body-md text-body-md text-stone-600 mt-4">Exploring the paradoxical nature of data preservation in an era of rapid technical obsolescence.</p>
</div>
</article>
<!-- Article 2 -->
<article class="group">
<div class="mb-6 overflow-hidden aspect-[4/5] bg-stone-100 border border-stone-200">
<img alt="Books stacks" class="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" data-alt="A modern library setting featuring rows of clean, white shelving holding diverse archival materials. The composition uses a strong diagonal perspective, creating a sense of depth and structured information. The lighting is natural and airy, with a cool-toned highlight on a section of Blueprint Blue colored document cases. The atmosphere is professional, organized, and forward-looking." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC8VO2CKUMpVEx3lXAVY5Yd9iQjFhEn3H1iwR9NMm1KFqXTJ-Otr4SJk5TzOSQfSrdPqLOzWvLnFlg2oCpqU-ARzRdrexquSfmxbcrp-nVwsEerrpzHQFiXIT-yYjoO73waDY_Uh69MOCImNyfbjIfPQWm_d7Vt9JjUHsX4ckTns556BDhDEMgv2R9TeGX5TexIJAgAmcxWVWEldFg2SWv1SatdEV2QagndpCW4z61FsD7eS1HgleGeAJyO4gjZPL6PIcvSA7uIhY"/>
</div>
<div class="editorial-callout border-stone-300 pl-6">
<span class="font-label-caps text-label-caps text-stone-500">APRIL 2024 / POLICY</span>
<h3 class="font-headline-md text-headline-md mt-2 group-hover:italic transition-all duration-300">Open Access and the Ethics of Custody</h3>
<p class="font-body-md text-body-md text-stone-600 mt-4">A critical look at who owns the digital record of human history and how access is mediated.</p>
</div>
</article>
<!-- Article 3 -->
<article class="group">
<div class="mb-6 overflow-hidden aspect-[4/5] bg-stone-100 border border-stone-200">
<img alt="Journal pages" class="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" data-alt="A close-up, high-detail macro shot of a single page of an old manuscript, showing the intricate texture of the paper and the fading ink of handwritten notes. The lighting is warm and dramatic, grazing across the surface to reveal the physical history of the document. The color palette incorporates rich ochre and deep charcoal, evoking a sense of deep time and the tactile nature of archival work." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOigiCHSppvNupwDgMY60b-SB_p3VDmtBHxJRuky7gtcbRmKMEPWxwOlbUrsyEOFqaDOdw0mJVrhkIfT8VmydHF8soal1ZtWo2A7d5F_pvihCvROJWWxMBJaXvFztiyN11u0A5Xf3TTvfXv7ByaijtoimbZQavEuHjq0nlur1I7HkyjN_U1l309_d4NkPxgwtKJ5on6pzMNGvcK_CmTy15TuxQRB5g0rZ2ZT0Sjqh89j0Wdm545cBWodsYtLkSX33lqcxuHt9q7tA"/>
</div>
<div class="editorial-callout border-stone-300 pl-6">
<span class="font-label-caps text-label-caps text-stone-500">MARCH 2024 / ARCHIVES</span>
<h3 class="font-headline-md text-headline-md mt-2 group-hover:italic transition-all duration-300">Labor and the Invisible Hand of the Librarian</h3>
<p class="font-body-md text-body-md text-stone-600 mt-4">Recognizing the human infrastructure that maintains our global knowledge systems.</p>
</div>
</article>
</div>
</section>
<!-- Footer -->
<footer class="bg-[#F5F3EF] dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 mt-stack-lg">
<div class="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
<div>
<div class="text-xl font-bold text-stone-800 dark:text-stone-100 mb-8">CLIR</div>
<p class="font-serif text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 max-w-sm">
                    Council on Library and Information Resources
                </p>
<div class="mt-8 space-y-4">
<div class="flex space-x-6">
<a class="text-stone-500 dark:text-stone-400 font-serif text-sm uppercase tracking-widest hover:underline decoration-[#9A1C46] underline-offset-4 transition-all duration-300" href="#">Privacy Policy</a>
<a class="text-stone-500 dark:text-stone-400 font-serif text-sm uppercase tracking-widest hover:underline decoration-[#9A1C46] underline-offset-4 transition-all duration-300" href="#">Terms of Service</a>
</div>
<div class="flex space-x-6">
<a class="text-stone-500 dark:text-stone-400 font-serif text-sm uppercase tracking-widest hover:underline decoration-[#9A1C46] underline-offset-4 transition-all duration-300" href="#">Contact Us</a>
<a class="text-stone-500 dark:text-stone-400 font-serif text-sm uppercase tracking-widest hover:underline decoration-[#9A1C46] underline-offset-4 transition-all duration-300" href="#">Archive Index</a>
</div>
</div>
</div>
<div class="flex flex-col md:items-end justify-between">
<div class="flex space-x-4">
<span class="material-symbols-outlined text-stone-400 hover:text-primary cursor-pointer">public</span>
<span class="material-symbols-outlined text-stone-400 hover:text-primary cursor-pointer">campaign</span>
<span class="material-symbols-outlined text-stone-400 hover:text-primary cursor-pointer">share</span>
</div>
<p class="font-serif text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-12 md:mt-0 text-left md:text-right">
                    © 2024 Council on Library and Information Resources. All rights reserved.
                </p>
</div>
</div>
</footer>
</body></html>