<template>
    <fieldset
        class="w-full flex flex-col sm:items-center sm:flex-row sm:space-x-1"
    >
        <div class="sm:w-2/5 md:w-3/5">
            <label for="Search">
                <input
                    v-model="search"
                    placeholder="Dev Web..."
                    class="w-full p-1 border border-black rounded-lg"
                />
            </label>
        </div>

        <div class="mt-1 sm:mt-0 md:w-2/5">
            <select
                v-model="sortByDate"
                class="p-1 border border-black rounded-xl md:px-[0.15rem]"
            >
                <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                </option>
            </select>

            <button
                title="Reset filters"
                class="mx-1 px-2 text-red-600 border border-red-600 rounded hover:bg-black/20 md:ms-1 md:px-0 lg:px-2"
                @click="() => (resetFilters = !resetFilters)"
            >
                X
            </button>
        </div>
    </fieldset>
</template>

<script setup lang="ts">
const { $t } = useI18n();

// Object !!!
const search = ref("");
const sortByDate = ref(true);
const options = ref([
    { text: $t("sortByDate.mostRecent"), value: true },
    { text: $t("sortByDate.lessRecent"), value: false },
]);
const resetFilters = ref(false);

console.log("[search, sortByDate, resetFilters]", search, resetFilters);
</script>
