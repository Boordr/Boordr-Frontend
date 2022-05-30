<template>
    <div
        class="thread relative md:my-1 py-2 px-2 cursor-pointer ">
        <div id="thread-content" class="hover:border hover:py-2 hover:px-2 md:line-clamp-3 hover:absolute hover:z-10 hover:line-clamp-none hover:rounded hover:drop-shadow-lg hover:rounded-lg hover:bg-zinc-100">
            <div class="hidden md:flex text-gray-500 cursor-pointer">
                <div class="rounded-full px-1">
                    <img src="https://placewaifu.com/image/18/18" class="rounded-full" alt="boord image"
                        title="boord Name">
                </div>
                <div class="pl-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
                <div class="px-0.5">
                    <p class="text-xs">400</p>
                </div>
                <div class="pl-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </div>
                <div class="px-0.5">
                    <p class="text-xs">100 replies</p>
                </div>
                <div>

                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                class="absolute right-0 z-20 mt-2 w-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        Hide
                                    </button>
                                    </MenuItem>
                                </div>

                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        Report
                                    </button>
                                    </MenuItem>
                                </div>

                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
            <img class="rounded drop-shadow-md mx-auto" src="https://placewaifu.com/image/300/200">
            <h3 id="thread-subject" class="subpixel-antialiased font-semibold truncate mt-1">Thread subject</h3>
            <p id="thread-post" class="text-xs rounded-md">Lorem ipsum dolor sit amet,
                consectetur
                adipiscing
                elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum
                mattis
                ullamcorper velit. Volutpat ac tincidunt vitae semper quis lectus nulla at. Venenatis cras sed
                felis
                eget velit aliquet sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin. Et tortor at
                risus
                viverra adipiscing at in tellus.</p>
        </div>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { DotsHorizontalIcon } from '@heroicons/vue/outline';
</script>