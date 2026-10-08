# FORGE — App tập tại nhà

App web tinh gọn giúp lên lịch tập tại nhà **không cần dụng cụ**, dành cho người
**skinny-fat** muốn cơ thể săn chắc và lên 6 múi.

## Tính năng

- 📅 **Lịch tập thông minh**: 6 buổi/tuần (Push / Pull / Legs × 2) + 1 ngày nghỉ Chủ nhật,
  hoặc 5 buổi + 2 ngày nghỉ — tùy chọn trong Cài đặt.
- 🏋️ **Tự nâng cấp khi mua dụng cụ**: mua thêm *dây kháng lực* hoặc *tạ đơn* →
  bật trong Cài đặt → lịch tự đổi sang các bài nặng hơn (vd: chống đẩy →
  đẩy ngực với dây → đẩy ngực tạ đơn).
- ⏱ **Bấm giờ nghỉ** giữa hiệp, có chuông báo.
- 📚 **Thư viện 40+ bài tập** với hướng dẫn chi tiết tiếng Việt.
- 📈 **Theo dõi tiến trình**: chuỗi ngày tập, số buổi, cân nặng.
- 🥗 **Gợi ý dinh dưỡng** cho mục tiêu tăng cơ giảm mỡ (~2.1g đạm/kg/ngày).
- 🖤 **Tông đen–trắng tối giản**, điểm nhấn volt.

## Chạy thử

Mở `index.html` bằng trình duyệt (hoặc serve thư mục này bằng bất kỳ static server nào).
Dữ liệu lưu trong `localStorage` của trình duyệt — không cần backend.

## Cấu trúc

```
index.html   — khung app + các modal
styles.css   — theme đen/trắng
app.js       — dữ liệu bài tập + bộ tạo lịch + logic UI
```

## Ghi chú chương trình tập

Thiết kế cho thể trạng skinny-fat (65–66kg / 1m78): ưu tiên **kháng lực toàn thân**
để tăng cơ + **HIIT/core** để siết mỡ, thâm hụt calo nhẹ và đạm cao.
Mỗi 2 tuần tăng 2 reps hoặc 1 set mỗi bài để progressive overload.
