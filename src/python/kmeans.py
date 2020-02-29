import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
import plotly.offline as plt
import plotly.graph_objs as go

#generate values divided into clusters of data points
x = -2 * np.random.rand(200,2)
x0 = 1 + 2 * np.random.rand(100,2)
x[100:200, :] = x0

plt.scatter(x[ : , 0], x[ :, 1], s = 25, color='blue')
plt.grid()

#We initiate the k, which represents the cluster with a random value of 3
#implement our k-means learning algorithm to establish the centres of clusters
Kmean = KMeans(n_clusters=3)
Kmean.fit(x)


#find location of centre of clusters (this is where our tree woukld be planted)
Kmean.cluster_centers_

#this visulaises the ctres of clusters on the graph
plt.scatter(2.03078996,  2.05446538, s=100, color='green')
plt.show()


#---------------------------------------------------------------------


# this is another version of kvalue algorithm implemented differently

k_means = (data.sample(k, replace=False))    # store current means
k_means2 = pd.DataFrame()                    # store previous means
clusters = pd.DataFrame()                    # store distances

while not k_means2.equals(k_means):

    # distance matrix (euclidean distance)
    cluster_count = 0
    for idx, k_mean in k_means.iterrows():
        clusters[cluster_count] = (data[k_means.columns] - 
                            np.array(k_mean)).pow(2).sum(1).pow(0.5)
        cluster_count += 1

# update cluster
data['MDCluster'] = clusters.idxmin(axis=1)

# store previous cluster
k_means2 = k_means
k_means = pd.DataFrame()
k_means_frame = data.groupby('MDCluster').agg(np.mean)

k_means[k_means_frame.columns] = k_means_frame[k_means_frame.columns]

    # plotting
data_graph = [go.Scatter(
              x=data['V1'],
              y=data['V2'].where(data['MDCluster'] == c),
              mode='markers',
              name='Cluster: ' + str(c)
              ) for c in range(k)]

data_graph.append(
    go.Scatter(
        x=k_means['V1'],
        y=k_means['V2'],
        mode='markers',
        marker=dict(
            size=10,
            color='#000000',
        ),
        name='Centroids of Clusters'
    )
)

plt.plot(data_graph, filename = "e.html")#html file with data)
