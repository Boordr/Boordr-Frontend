<template>
    <form action="">
        <div>
            <button type="button" @click="openModal"
                class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                <PhotographIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                New thread
            </button>
        </div>
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">

                                    <!--Reply Content -->
                                    <p class="text-xs text-gray-500 italic ml-15">Posting in:</p>
                                    <div class="flex">
                                        <select class="cursor-not-allowed focus:border-indigo-500 font-bold w-full"
                                            disabled>
                                            <option value="volvo">Anime</option>
                                        </select>

                                    </div>

                                    <hr class="mt-4">

                                    <div class="rounded-md bg-indigo-500 p-4 mt-3">
                                        <div class="flex">
                                            <div class="flex-shrink-0">
                                                <InformationCircleIcon class="h-5 w-5 text-white"
                                                    aria-hidden="true" />
                                            </div>
                                            <div class="ml-3 flex-1 md:flex md:justify-between">
                                                <p class="text-sm text-white">A image is required to create a thread.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-3 grid grid-cols-1 gap-y-6 gap-x-1 sm:grid-cols-6">
                                        <div class="sm:col-span-2">

                                            <div class="mt-1">
                                                <input type="text" name="name" id="name" placeholder="Name"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">

                                            <div class="mt-1">
                                                <input type="text" name="options" id="options" placeholder="options"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 " />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">

                                            <div class="mt-1">
                                                <input type="text" name="subject" placeholder="subject"
                                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" />
                                            </div>
                                        </div>
                                    </div>
                                </DialogTitle>
                                <div class="mt-2">
                                    <div>

                                        <div class="mt-1">
                                            <textarea rows="4" name="comment" id="comment"
                                                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <button type="button"
                                        class="inline-flex justify-center rounded-sm border border-transparent bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2">
                                        Files
                                    </button>
                                    <button type="button"
                                        class="inline-flex  mx-2 justify-center rounded-sm border border-transparent bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                                        submit
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </form>
</template>



<script setup>

import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { PhotographIcon, InformationCircleIcon } from '@heroicons/vue/outline'

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>