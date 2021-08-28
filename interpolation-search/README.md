## Interpolation Search - Tìm kiếm nội suy

- Tìm kiếm nội suy là một thuật toán để tìm kiếm một khóa trong một mảng đã được sắp xếp thứ tự bởi các giá trị số được gán cho các khóa (giá trị khóa).
- Toàn bộ vấn đề là xác định vị trí. Điều này được thực hiện bằng cách tìm vị trí. Thực hiện lặp đi lặp lại hoặc đệ quy. Đây là công thức xác định vị trí:

```
pos = left + ((x - arr[left]) * (right - left) / (arr[right] - arr[Left]))
```

- Time complexity: O(log(log(n))
