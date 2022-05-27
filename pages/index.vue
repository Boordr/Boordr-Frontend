<template>
    <NuxtLayout name="custom"></NuxtLayout>

    <div class="container border border-[#d0d7de] rounded drop-shadow-sm mt-4 mx-auto bg-white">

        <div class="mx-auto lg:py-3 lg:px-8">

            <div class="flex">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                        clip-rule="evenodd" />
                </svg>

                <h2 class="text-3xl mx-1 font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl"> Browse our
                    popular boords.</h2>

            </div>

            <!-- Boards -->
            <div class="py-5 flex flex-wrap">
                <div
                    class="flex space-x-1 text-sm text-white hover:bg-orange-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-orange-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Art</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-rose-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-rose-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Anime</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-sky-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-sky-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Programming</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-amber-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-amber-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Meta</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-lime-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-lime-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Funny</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-indigo-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-indigo-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Random</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-pink-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-pink-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Pokemon</div>
                </div>


                <div
                    class="flex space-x-1 text-sm text-white hover:bg-orange-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-orange-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Art</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-rose-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-rose-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Anime</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-sky-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-sky-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Programming</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-amber-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-amber-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Meta</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-lime-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-lime-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Funny</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-indigo-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-indigo-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Random</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-pink-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-pink-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Pokemon</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-orange-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-orange-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Art</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-rose-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-rose-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Anime</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-sky-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-sky-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Programming</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-amber-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-amber-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Meta</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-lime-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-lime-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Funny</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-indigo-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-indigo-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Random</div>
                </div>

                <div
                    class="flex space-x-1 text-sm text-white hover:bg-pink-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-pink-400">
                    <div class="rounded-full"><img src="https://placewaifu.com/image/25/25" class="rounded-full"
                            alt="board-icon"></div>
                    <div class="">Pokemon</div>
                </div>
            </div>

        </div>

    </div>

    <!-- Section Heading -->
    <div class="container mx-auto pb-5 mt-6 border-b border-gray-200 sm:pb-0">
        <div class="mt-3 sm:mt-4">
            <div class="sm:hidden">
                <label for="current-tab" class="sr-only">Select a tab</label>
                <select id="current-tab" name="current-tab"
                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
                </select>
            </div>
            <div class="hidden sm:block">
                <nav class="-mb-px flex space-x-8">
                    <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                        :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']"
                        :aria-current="tab.current ? 'page' : undefined">
                        {{ tab.name }}
                    </a>
                </nav>
            </div>
        </div>
    </div>

    <!--Each board can get logo -->
    <!-- Threads -->
    <div class="my-2 mx-2">
        <div class="thread-container grid grid-cols-7">
            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/300/200">
                <h3 class="subpixel-antialiased font-semibold truncate"></h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>


            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/188/200">
                <h3 class="subpixel-antialiased font-semibold truncate">New anime announced</h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>


            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/214/200">
                <h3 class="subpixel-antialiased font-semibold truncate"></h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>


            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/150/200">
                <h3 class="subpixel-antialiased font-semibold truncate">New anime announced</h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>


            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/234/200">
                <h3 class="subpixel-antialiased font-semibold truncate"></h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>


            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/210/200">
                <h3 class="subpixel-antialiased font-semibold truncate">New anime announced</h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>


            <div class="thread mx-2 my-1">
                <div class="flex space-x-1 text-gray-500 my-1">
                    <div class="flex">
                        <div class="rounded-full">
                            <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="">
                        </div>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <p class="text-xs px-1">400</p>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p class="text-xs px-1">2 comments</p>
                    </div>
                </div>
                <img class="cursor-pointer hover:brightness-125 rounded drop-shadow-md"
                    src="https://placewaifu.com/image/294/200">
                <h3 class="subpixel-antialiased font-semibold truncate">New anime announced</h3>
                <p class="text-xs line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis
                    eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at risus
                    viverra adipiscing at in tellus.</p>
            </div>



        </div>

        <!-- <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/300/190">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/400/200">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/200/100">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/200/150">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/155/200">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/100/140">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/200/165">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/200/157">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/200/195">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/220/200">
        <img class="mx-2 my-2 cursor-pointer hover:brightness-125" src="https://placewaifu.com/image/240/155"> -->

    </div>

</template>

<script setup>
definePageMeta({
    layout: false,
});

const tabs = [
    { name: 'Trending', href: '#', current: true },
    { name: 'New', href: '#', current: false },
    { name: 'Archived', href: '#', current: false },
]
</script>
