
<div class="nav__overlay" data-component="nav"></div>
<div class="nav__search" aria-labelledby="Search website" data-component="navsearch">
  <div class="nav__search-content frame">
    <form
      id="nav__search-form"
      id="search_form"
      accept-charset="UTF-8"
      action="//findit.state.gov/search"
      method="get"
      class="nav__search-form"
      name="gs"
    >
      <div class="nav__search-input-wrapper">
        <label id="nav__search-query-id" for="nav__search-query">Search:</label>
        <input
          autocomplete="on"
          class="usagov-search-autocomplete nav__search-input"
          id="nav__search-query"
          name="query"
          type="search"
          placeholder="Enter your search term or phrase"
          aria-labelledby="nav__search-query-id"
        />
        <input id="affiliate" name="affiliate" type="hidden" value="dos_stategov" />
      </div>
      <div class="nav__search-cta-wrapper">
        <button
          class="icon-arrow-right link--arrow--right nav__search-cta"
          type="submit"
          form="nav__search-form"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</div>
<div class="nav__subnav-close-wrapper">
  <div class="nav__subnav-close-content frame">
    <button class="icon icon-close-thin nav__subnav-close js-subnav-close" tabindex="0">
      <span class="screen-reader-text">Close</span>
    </button>
  </div>
</div>

<!-- #navigationfooter -->