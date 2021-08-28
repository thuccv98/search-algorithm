## Jump Search - Tìm kiếm bước nhảy hay tìm kiếm khối

- Chỉ hoạt đông với các mảng đã sắp xếp.
- Ý tưởng là tìm kiếm ít phần tử hơn so với tìm kiếm tuyến tính bằng cách nhảy lên phía trước theo một số lượng xác định trước để tìm một khối các phần tử mà mục tiêu có thể nằm trong.
- Khi tìm thấy khối mà mục tiêu đang ở đó , nó sẽ thực hiện tìm kiếm tuyến tính để tìm kiếm mục tiêu.
- Các bước tìm kiếm bằng Jump Search
  1. Xác định giá trị block size để jump.
  2. TÌm ra block mà chứa mục tiêu tìm kiếm.
  3. Thực hiện tìm kiếm tuyến tính trên block đó.
- Time complexity: O(√n) - Bởi vì chỉ tìm theo các khối có size √n.
