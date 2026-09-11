# Maxime-p.dev

Maxime-p.dev is a personal publication about the JavaScript development ecosystem. It combines articles written by Maxime with a curated list of external resources.

## Content

**Blog Post**:
An article written by Maxime and published with its own internal page.
_Avoid_: News Item, external article

**News Item**:
A dated reference to an external resource, ordered from the newest Source Publication Date to the oldest, with editorial ordering used for ties. It contains a title, Source Publication Date, Thumbnail URL, Destination URL, and one News Resource Type.
_Avoid_: Blog Post, news article

**News Resource Type**:
The required, single classification of what a News Item is. Use one of: AI Model, Framework, Runtime, Library, Language, Tool, or Platform. It is written directly in the News Item frontmatter and is the only News filter.
_Avoid_: Category, release

**Source Publication Date**:
The required date on which the external resource referenced by a News Item was originally published. Later updates to the resource do not change this date.
_Avoid_: Curation Date, added date

**Destination URL**:
The external URL opened from a News Item's title or thumbnail.
_Avoid_: News page, internal link

**Thumbnail URL**:
The URL of the image displayed for a News Item.
_Avoid_: Hero image

## Navigation

**Home Preview**:
A compact display of the three newest Blog Posts or three newest News Items on the Home page.
_Avoid_: Archive, featured article

**News Filters**:
An interactive Resource Type list on the News page. Selecting a type filters News Items; the selection is represented in the URL hash. It is ordered from the most referenced type to the least referenced, then alphabetically when reference counts are equal.
_Avoid_: Tag list, category

**About Profile**:
A short, factual introduction to Maxime on the About page.
_Avoid_: Biography
