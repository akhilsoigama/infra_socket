# Model Selection

## Why Isolation Forest?

| Criterion | Isolation Forest | One-Class SVM | Autoencoder | Statistical (Z-score) |
|---|---|---|---|---|
| Unsupervised | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| Works with small data | ✅ Yes | ⚠️ Moderate | ❌ Needs more data | ✅ Yes |
| Computational cost | ✅ Low | ⚠️ Moderate | ❌ High (GPU helpful) | ✅ Very low |
| Edge deployment | ✅ Easy | ✅ Easy | ⚠️ Harder | ✅ Easy |
| No distribution assumptions | ✅ Yes | ⚠️ Kernel-dependent | ✅ Yes | ❌ Assumes normal dist. |
| Multi-dimensional | ✅ Yes | ✅ Yes | ✅ Yes | ❌ Per-feature only |
| Interpretability | ✅ Good (score) | ⚠️ Moderate | ⚠️ Moderate | ✅ Very good |
| Maturity | ✅ Well-established | ✅ Well-established | ✅ Established | ✅ Classical |

**Isolation Forest** is selected for the MVP because it is:
1. **Unsupervised** — does not require labeled anomalies
2. **Works without large labeled datasets** — the amount and diversity of baseline data required will be determined experimentally
3. **Computationally efficient** — suitability for specific edge hardware to be benchmarked
4. **Well-understood** — published in IEEE ICDM 2008 by Liu, Ting, and Zhou; extensive documentation and library support (scikit-learn)
5. **Multi-dimensional** — considers all features jointly, not independently

## Alternative Models (`Future Scope`)

### One-Class SVM
Learns a boundary around normal data in feature space. Useful but more sensitive to hyperparameters and feature scaling.

### Autoencoder (Neural Network)
Learns to compress and reconstruct normal data. Anomalies produce high reconstruction error. Requires more data and computational resources.

### Local Outlier Factor (LOF)
Density-based approach — anomalies are in low-density regions. Computationally heavier during inference. May be used alongside Isolation Forest for comparison.

### Ensemble Approach
Combine multiple models and aggregate their anomaly scores. More robust but more complex. `Future Scope`.

## Model Comparison Plan

`Assumption`: For the MVP, only Isolation Forest will be implemented. After collecting sufficient data, additional models can be trained and compared using the same feature vectors and evaluation metrics.

---

*See also: [Anomaly Detection](anomaly-detection.md) | [Model Training](model-training.md) | [Model Evaluation](model-evaluation.md)*
