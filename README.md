# MJev-Spatial project page

Research website for **MJev-Spatial: System One Spatial Intelligence via Native Attention Matching**.

- Website: https://fr0zencrane.github.io/mjev-spatial-project/
- Paper: https://arxiv.org/abs/2610.22276
- Model implementation: https://github.com/Fr0zenCrane/MJev-Spatial
- Model weights: https://huggingface.co/Fr0zencr4nE/MJev-Spatial-Qwen-3.5-4B

## Local preview

No build step or package installation is required.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## GitHub Pages

GitHub Pages publishes the root directory of the `main` branch. Updates pushed to `main` automatically trigger publication. `.nojekyll` serves the site as plain static files.

## Files

- `index.html`: page content and the benchmark table.
- `styles.css`: layout and MindLab-inspired blue-purple styling.
- `app.js`: figure enlargement and citation copying.
- `results-data.json`: benchmark scores and overall mean latencies from the paper.
- `assets/`: the three paper figures and the original title wordmark extracted from the paper.
- `citation.bib`: downloadable citation.

Research content and figures are from Qin et al., arXiv:2610.22276. Upstream license and attribution are retained in `UPSTREAM-LICENSE` and `UPSTREAM-NOTICE`.
