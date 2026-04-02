import { defineField, defineType } from "sanity";

export const work = defineType({
    name: "work",
    title: "Work",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "producedOn",
            title: "Produced On",
            type: "datetime",
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "collaborators",
            title: "Collaborators",
            type: "array",
            of: [{ type: "string" }],
        }),
    ],
});
