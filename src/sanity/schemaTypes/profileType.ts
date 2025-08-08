// sanity.config.ts

import { defineField, defineType } from "sanity";

// Definiert den wiederverwendbaren Typ für die Links
export const linkItemType = defineType({
  name: "linkItem",
  title: "Link Item",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

// Definiert das Haupt-Dokument für das Profil
export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  // Maximale Anzahl von Dokumenten dieses Typs auf 1 beschränken
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lookingFor",
      title: "Looking For",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
        }),
      ],
    }),
    defineField({
      name: "resumeUrl",
      title: "Resume URL",
      type: "string",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "links",
      title: "Social Links",
      type: "array",
      of: [{ type: "linkItem" }], // Verwendet den neu definierten Typ
      validation: (Rule) => Rule.required(),
    }),
  ],
});
