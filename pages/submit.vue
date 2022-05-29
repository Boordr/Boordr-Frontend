<template>
    <div>
        <NuxtLayout name="header"></NuxtLayout>

        <div class="container mx-auto my-3">
            <div>
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Create something wonderful</h3>
                            <p class="mt-1 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Consequatur optio explicabo at accusantium illum cum saepe esse molestias,
                                temporibus ex vero animi, facere molestiae voluptatibus rerum incidunt! Eaque, odit
                                nulla.</p>
                        </div>
                    </div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div class="grid grid-cols-3 gap-6">
                                        <div class="col-span-3 sm:col-span-2">
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <span
                                                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                    Name </span>
                                                <input type="text" required
                                                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">Board Logo </label>
                                        <div class="mt-1 flex items-center">
                                            <span
                                                class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <svg class="h-full w-full text-gray-300" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button type="button"
                                                class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                                        <div
                                            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor"
                                                    fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload"
                                                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file"
                                                            class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 ">
                                    <fieldset class="border-t border-b border-gray-200">
                                        <legend class="sr-only">Notifications</legend>
                                        <div class="divide-y divide-gray-200">
                                            <div class="relative flex items-start py-4">
                                                <div class="min-w-0 flex-1 text-sm">
                                                    <label
                                                        class="font-medium text-gray-700">Standard</label>
                                                    <p class="text-gray-500">Standard image board with 
                                                        automatic thread deletion and saging.
                                                    </p>
                                                </div>
                                                <div class="ml-3 flex items-center h-5">
                                                    <input  aria-describedby="comments-description"
                                                       type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                </div>
                                            </div>
                                            <div class="relative flex items-start py-4">
                                                <div class="min-w-0 flex-1 text-sm">
                                                    <label for="candidates"
                                                        class="font-medium text-gray-700">Archive</label>
                                                    <p class="text-gray-500">Image board with threads
                                                        that become <span class="underline decoration-dashed">archived</span>  after falling of
                                                        the front page. All threads can be bumped.
                                                    </p>
                                                </div>
                                                <div class="ml-3 flex items-center h-5">
                                                    <input  aria-describedby="candidates-description"
                                                       type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                </div>
                                            </div>
                                            <div class="relative flex items-start py-4">
                                                <div class="min-w-0 flex-1 text-sm">
                                                    <label for="offers" class="font-medium text-gray-700">Restricted</label>
                                                    <p  class="text-gray-500">Password protected board, these
                                                        boards cannot have archived threads.
                                                    </p>
                                                </div>
                                                <div class="ml-3 flex items-center h-5">
                                                    <input aria-describedby="offers-description"
                                                        type="checkbox"
                                                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit"
                                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { MailIcon, PhoneIcon } from '@heroicons/vue/outline'
</script>