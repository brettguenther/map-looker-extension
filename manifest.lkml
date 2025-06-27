
project_name: "map-overlay-extension"

application: map-overlay-extension {
  label: "Map Viz Overlay"
  url: "https://localhost:8080/bundle.js"
  # file: "bundle.js"
  entitlements: {
    external_api_urls: ["https://maps.googleapis.com","https://localhost:8080"]
    use_iframes: yes
    use_embeds: yes
    core_api_methods: ["query_for_slug", "query", "run_query"]
  }
  mount_points: {
    dashboard_vis: no
    dashboard_tile: no
    standalone: yes
  }
}

