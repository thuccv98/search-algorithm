## Binary Search - Tìm kiếm nhị phân

- Tìm kiếm nhị phân là một thuật toán tìm kiếm để tìm vị trí của giá trị đích trong một mảng được sắp xếp bằng cách sử dụng phương pháp chia và trị.
- Nó hoạt động bằng cách so sánh giá trị đích với giữa mảng. Nếu nó không bằng nhau, hãy tìm kiếm một nửa nơi mục tiêu sẽ đến và lặp lại quá trình này cho đến khi tìm thấy giá trị mục tiêu.
- Các bước tìm kiếm bằng tìm kiếm nhị phân:
  - So sánh giá trị đích với phần tử giữa của mảng.
  - Nếu nó không bằng nhau, loại bỏ một nửa mà giá trị mục tiêu không thể có.
  - Lặp lại bước một và hai cho tới khin tìm ra câu trả lời.
- Time Complexity: O(log(n)) - Vì ta chia khu vực tìm kiếm thành hai cho mỗi lần lặp tiếp theo.
