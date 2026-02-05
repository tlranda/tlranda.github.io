---
layout: publication
title: "GALE: Leveraging Heterogeneous Systems for Efficient Unstructured Mesh Data Analysis"
doi: "https://doi.org/10.1109/TVCG.2025.3634637"
pub_order: 6
date: 2025-12-05
authors: Guoxi Liu, Thomas Randall, Rong Ge, Federico Iuricich
conference: "IEEE TVCG'25"
conference_full: "IEEE Transactions on Visualization and Computer Graphics"
acm: false
paper: "/Media/GALE/GALE_2507.15230v2.pdf"
source: "https://github.com/guoxiliu/GALE"
abstract: "Unstructured meshes present challenges in scientific data analysis due to irregular distribution and complex connectivity. Computing and storing connectivity information is a major bottleneck for visualization algorithms, affecting both time and memory performance. Recent task-parallel data structures address this by precomputing connectivity information at runtime while the analysis algorithm executes, effectively hiding computation costs and improving performance. However, existing approaches are CPU-bound, forcing the data structure and analysis algorithm to compete for the same computational resources, limiting potential speedups. To overcome this limitation, we introduce a novel task-parallel approach optimized for heterogeneous CPU-GPU systems. Specifically, we offload the computation of mesh connectivity information to GPU threads, enabling CPU threads to focus on executing the visualization algorithm. Following this paradigm, we propose GALE (GPU-Aided Localized data structurE), the first open-source CUDA-based data structure designed for heterogeneous task parallelism. Experiments on two 20-core CPUs and an NVIDIA V100 GPU show that GALE achieves up to 2.7x speedup over state-of-the-art localized data structures while maintaining memory efficiency."
short_abstract: "Unstructured meshes present challenges in scientific data analysis due to irregular distribution and complex connectivity. Computing and storing connectivity information is a major bottleneck for visualization algorithms, affecting both time and memory performance. Recent task-parallel data structures address this by precomputing connectivity information at runtime while the analysis algorithm executes, effectively hiding computation costs and improving performance. However, existing approaches are CPU-bound, forcing the data structure and analysis algorithm to compete for the same computational resources, limiting potential speedups. "
more_abstrct: "To overcome this limitation, we introduce a novel task-parallel approach optimized for heterogeneous CPU-GPU systems. Specifically, we offload the computation of mesh connectivity information to GPU threads, enabling CPU threads to focus on executing the visualization algorithm. Following this paradigm, we propose GALE (GPU-Aided Localized data structurE), the first open-source CUDA-based data structure designed for heterogeneous task parallelism. Experiments on two 20-core CPUs and an NVIDIA V100 GPU show that GALE achieves up to 2.7x speedup over state-of-the-art localized data structures while maintaining memory efficiency."
key_image: "/Media/GALE/heterogeneous_pipeline.png"
key_image_alt_text: "A visualization of the pipeline for heterogeneous computations. On the CPU there are two kinds of threads: \"consumer\" threads that push coboundary and adjacency relations into a relation queue, and \"leader producer\" threads that batch processes to the GPU from the relation queue. The GPU runs \"worker producer\" kernels asynchronously with the \"leader producer\" threads, which notify consumers once results are ready for CPU-side consumption."
---
