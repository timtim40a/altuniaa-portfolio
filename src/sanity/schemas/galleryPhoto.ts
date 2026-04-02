import { defineField, defineType } from "sanity";

export const galleryPhoto = defineType({
    name: "galleryPhoto",
    title: "Gallery Photo",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "alt",
            title: "Alt Text",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "caption",
            title: "Caption",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "takenAt",
            title: "Taken At",
            type: "datetime",
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
        }),
    ],
});
