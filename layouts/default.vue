<template>
    <div class="drawer bg-gray-200">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col  gap-4 min-h-screen  ">
            <Menubar class="sticky top-0 z-10" />
            <div class="md:px-3 lg:container lg:mx-auto">
                <slot />
            </div>
            <CommonFooter />
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>

        </div>
    </div>
</template>
