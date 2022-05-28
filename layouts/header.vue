<template>
    <header>
        <nav class="max-w-7xl mx-auto sm:px-6 " aria-label="Top">
            <div class="w-full py-3 flex items-center justify-between border-b border-indigo-500 lg:border-none">

                <!-- LOGO -->
                <div class="flex items-center mx-2">
                    <a href="#">
                        <span class="sr-only">Workflow</span>
                        <img class="h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo" />
                    </a>
                    <!-- <div class="hidden ml-10 space-x-8 lg:block">
                        <a v-for="link in navigation" :key="link.name" :href="link.href"
                            class="text-base font-medium text-indigo-500 hover:text-indigo-50">
                            {{ link.name }}
                        </a>
                    </div> -->
                </div>

                <div class="grow">
                    <div class="mt-1 relative flex items-center">
                        <input type="text" name="search" id="search"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" />
                        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                            <kbd
                                class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg> </kbd>
                        </div>
                    </div>
                </div>

                <div class="flex space-x-1">
                    <a href="#"
                        class="inline-block bg-white py-2  border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"></a>

                    <!-- ICONS -->
                    <a href="" title="Like on github"><svg height="30px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1"
                            viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            .st0{fill-rule:evenodd;clip-rule:evenodd;}<g>
                                <path class="st0"
                                    d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z" />
                            </g></svg></a>

                    <a href="" title="Follow on twitter"><svg id="Layer_1" style="enable-background:new 0 0 1000 1000;" version="1.1"
                            viewBox="0 0 1000 1000" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" width="30px"
                            height="30px" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <g id="Dark_Blue">
                                    <path style="fill: #1DA1F2;"
                                        d="M500,0L500,0c276.1,0,500,223.9,500,500v0c0,276.1-223.9,500-500,500h0C223.9,1000,0,776.1,0,500v0    C0,223.9,223.9,0,500,0z" />
                                </g>
                                <g id="Logo_FIXED">
                                    <path style="fill: #FFFFFF;"
                                        d="M384,754c235.8,0,364.9-195.4,364.9-364.9c0-5.5,0-11.1-0.4-16.6c25.1-18.2,46.8-40.6,64-66.4    c-23.4,10.4-48.2,17.2-73.6,20.2c26.8-16,46.8-41.2,56.4-70.9c-25.2,14.9-52.7,25.5-81.4,31.1c-48.6-51.6-129.8-54.1-181.4-5.6    c-33.3,31.3-47.4,78-37.1,122.5c-103.1-5.2-199.2-53.9-264.3-134c-34,58.6-16.7,133.5,39.7,171.2c-20.4-0.6-40.4-6.1-58.2-16    c0,0.5,0,1.1,0,1.6c0,61,43,113.6,102.9,125.7c-18.9,5.1-38.7,5.9-57.9,2.2c16.8,52.2,64.9,88,119.8,89.1    c-45.4,35.7-101.5,55.1-159.2,55c-10.2,0-20.4-0.6-30.5-1.9C246.1,734,314.4,754,384,753.9" />
                                    <path style="fill: none;"
                                        d="M500,0L500,0c276.1,0,500,223.9,500,500v0c0,276.1-223.9,500-500,500h0C223.9,1000,0,776.1,0,500v0    C0,223.9,223.9,0,500,0z" />
                                </g>
                            </g>
                        </svg>
                    </a>

                    <a href="" title="Site settings">
                        <svg viewBox="0 0 24 24" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg"><path d="M21.32,10.05l-1.74-.58a8,8,0,0,0-.43-1.05L20,6.79a1,1,0,0,0-.19-1.15L18.36,4.22A1,1,0,0,0,17.21,4l-1.63.82a8,8,0,0,0-1.05-.43L14,2.68A1,1,0,0,0,13,2H11a1,1,0,0,0-.95.68L9.47,4.42a8,8,0,0,0-1.05.43L6.79,4a1,1,0,0,0-1.15.19L4.22,5.64A1,1,0,0,0,4,6.79l.82,1.63a8,8,0,0,0-.43,1.05l-1.74.58A1,1,0,0,0,2,11v2a1,1,0,0,0,.68.95l1.74.58a8,8,0,0,0,.43,1.05L4,17.21a1,1,0,0,0,.19,1.15l1.42,1.42A1,1,0,0,0,6.79,20l1.63-.82a8,8,0,0,0,1.05.43l.58,1.74A1,1,0,0,0,11,22h2a1,1,0,0,0,.95-.68l.58-1.74a8,8,0,0,0,1.05-.43l1.63.82a1,1,0,0,0,1.15-.19l1.42-1.42A1,1,0,0,0,20,17.21l-.82-1.63a8,8,0,0,0,.43-1.05L21.32,14A1,1,0,0,0,22,13V11A1,1,0,0,0,21.32,10.05ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" fill="#464646"/></svg>
                    </a>

                    <a href="" title="Manage boards">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>

                </div>
            </div>
            <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                <a v-for="link in navigation" :key="link.name" :href="link.href"
                    class="text-base font-medium text-indigo-500 hover:text-indigo-50">
                    {{ link.name }}
                </a>
            </div>
        </nav>
    </header>
</template>

<script setup>
useHead({
    titleTemplate: 'Boorder App',

    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
        class: 'relative'
    }
})

const navigation = [
    { name: '', href: '#' },
]
</script>